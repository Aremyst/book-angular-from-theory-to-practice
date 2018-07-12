import { Component } from '@angular/core';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-async-pipe-observable',
  templateUrl: './async-pipe-observable.component.html',
  styleUrls: ['./async-pipe-observable.component.css']
})
export class AsyncPipeObservableComponent  {
  observable: Observable<number>;

  constructor() {
    this.observable = this.getObservable();
  }

  getObservable() {
    return Observable
      .interval(1000)
      .take(10)
      .map((v) => v * v);
  }
}
