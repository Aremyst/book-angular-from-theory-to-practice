import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  promise: Promise<string>;

  constructor() {
    // Lambda function's "this" is the correct "this"(current AsyncPipeComponent), in contrast to
    // if we would've used "(function(resolvedValue) { this.promiseData = resolvedValue; }).
    this.promise = this.getPromise();
  }

  getPromise() {
    return new Promise<string>(function(resolve, reject) {
      setTimeout(function() {
        resolve("Promise complete!");
      }, 3000);
    })
  }

  ngOnInit() {
  }

}
