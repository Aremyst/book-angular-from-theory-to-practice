import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  constructor() { }

  /* DN: Possible to pass parameter - what name is used in HTML: */
  /* @Input('joke') renamedVar: Joke */
  @Input() joke: Joke;

  @Output() jokeDeleted = new EventEmitter<Joke>();

  delete() {
    this.jokeDeleted.emit(this.joke);
  }

  ngOnInit() {
  }
}

export class Joke {
  setup: string;
  punchline: string;
  hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
