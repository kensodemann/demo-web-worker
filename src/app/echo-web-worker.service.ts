import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const fooBar = () => {
  const fact = (n: number): number => (n === 1 ? 1 : n * fact(n - 1));

  self.onmessage = function (e) {
    self.postMessage(
      `Hello ${e.data.name}!! Nice to meet you!! The factorial of your age is: ${fact(e.data.age)}`,
      undefined
    );
  };
};

@Injectable({
  providedIn: 'root',
})
export class EchoWebWorkerService {
  private worker: Worker;
  private message: BehaviorSubject<string>;

  get currentMessage() {
    return this.message.asObservable();
  }

  constructor() {
    this.message = new BehaviorSubject('');
    this.worker = new Worker(
      URL.createObjectURL(
        new Blob(['(' + fooBar.toString() + ')()'], { type: 'text/javascript' })
      )
    );

    this.worker.onmessage = (e) => {
      this.message.next(e.data);
    };
  }

  ping(name: string, age: number) {
    this.worker.postMessage({name, age});
  }
}
