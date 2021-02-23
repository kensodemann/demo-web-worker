import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

const fooBar = () => {
  self.onmessage = function (e) {
    self.postMessage(`Hello ${e.data}!! Nice to meet you!! I am a worker.`, undefined);
  };
};

@Injectable({
  providedIn: 'root'
})
export class EchoWebWorkerService {
  private worker: Worker;
  private message: BehaviorSubject<string>;

  constructor() {
    this.message = new BehaviorSubject('');
    this.worker = new Worker(
      URL.createObjectURL(new Blob(['(' + fooBar.toString() + ')()'], { type: 'text/javascript' }))
    );

    this.worker.onmessage = (e) => {
      this.message.next(e.data);
    }
  }

  ping(name: string) {
    this.worker.postMessage(name);
  }
}
