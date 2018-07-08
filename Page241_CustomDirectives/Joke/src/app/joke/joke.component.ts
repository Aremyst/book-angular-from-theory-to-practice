import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Joke} from "../joke";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  /* DN: Possible to pass parameter - what name is used in HTML: */
  /* @Input('joke') renamedVar: Joke */
  @Input() joke: Joke;

  @Output() jokeDeleted = new EventEmitter<Joke>();

  delete() {
    this.jokeDeleted.emit(this.joke);
  }

  constructor() {
    console.log(`new - data is ${this.joke}`);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data is ${this.joke}`);

    for (let key in changes) {
      console.log(`${key} changed.
        Current: ${changes[key].currentValue}.
        Previous: ${changes[key].previousValue}`);
    }
  }
  ngOnInit() {
    console.log(`ngOnInit - data is ${this.joke}`);
  }
  ngDoCheck() {
    console.log("ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
