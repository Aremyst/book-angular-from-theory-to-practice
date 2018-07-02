import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Joke} from "../joke";

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class JokeFormComponent implements OnInit {

  constructor() { }

  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

  ngOnInit() {
  }

}
