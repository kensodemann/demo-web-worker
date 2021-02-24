import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EchoWebWorkerService } from '../echo-web-worker.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  age: number;
  name: string;
  msg$: Observable<string>;

  constructor(private echo: EchoWebWorkerService) {
    this.msg$ = this.echo.currentMessage;
  }

  ping() {
    this.echo.ping(this.name, this.age);
  }
}
