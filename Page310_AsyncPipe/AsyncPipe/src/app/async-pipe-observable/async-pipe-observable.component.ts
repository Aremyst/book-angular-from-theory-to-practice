import { Component } from '@angular/core';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-async-pipe-observable',
  templateUrl: './async-pipe-observable.component.html',
  styleUrls: ['./async-pipe-observable.component.css']
})
export class AsyncPipeObservableComponent  {
  observableData: number;
  subscription: any = null;

  constructor() {
    this.subscribeObservable();
  }

  getObservable() {
    return Observable
      .interval(1000)
      .take(10)
      .map((v) => v * v);
  }

  subscribeObservable() {
    this.subscription = this.getObservable()
      .subscribe( v => this.observableData = v);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
