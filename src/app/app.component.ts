import { Component } from '@angular/core';

const fooBar = () => {
  self.onmessage = function (e) {
    console.log(e);
    self.postMessage('msg from worker', undefined);
  };
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor() {
    const worker = new Worker(
      URL.createObjectURL(new Blob(['(' + fooBar.toString() + ')()'], { type: 'text/javascript' }))
    );
    worker.onmessage = function (e) {
      console.log('Received: ' + e.data);
    };
    worker.postMessage('hello');
    setInterval(() => worker.postMessage('hello'), 1000)
  }
}
