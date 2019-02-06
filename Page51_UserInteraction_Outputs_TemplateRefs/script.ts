import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Component} from '@angular/core';
import {Input} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app',
    template: `<joke-list></joke-list>`
})
class AppComponent {
}


@Component({
    selector: 'joke-list',
    template: `
        <joke-form (jokeCreated)="addJoke($event)" #jokeFormComponent></joke-form>
        <joke *ngFor="let joke of jokes" [joke]="joke" [jokeFormComponent]="jokeFormComponent"></joke>
    `
})
class JokeListComponent {
    jokes: Joke[];

    constructor() {
        this.jokes = [
            new Joke("What did the cheese say when it looked in the mirror?","Hello-Me (Halloumi)"),
            new Joke("What kind of cheese do you use to disguise a small horse?","Mask-a-pony (Mascarpone)"),
            new Joke("A kid threw a lump of cheddar at me","I thought ‘That’s not very mature’")
        ];
    }

    addJoke(joke: Joke) {
        this.jokes.unshift(joke);
    }
}


@Component({
    selector: 'joke',
    template: `
        <div class="card card-block">
            <h4 class="card-title" (click)="jokeFormComponent.outputSomething()">{{joke.setup}}</h4>
            <p class="card-text" [hidden]="joke.hide">{{joke.punchline}}</p>
            <a (click)="joke.toggle()" class="btn btn-warning">Tell Me</a>
        </div>
    `
})
class JokeComponent {
    @Input('joke') joke: Joke;
    @Input() jokeFormComponent: JokeFormComponent;
}

class Joke {
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

@Component({
    selector: 'joke-form',
    template: `
        <div class="card card-block">
            <h4 class="card-title">Create Joke</h4>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter the setup">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter the punchline">
            </div>
            <button type="button" class="btn btn-primary" (click)="createJoke()">Create</button>
        </div>
    `
})
export class JokeFormComponent {
    @Output() jokeCreated = new EventEmitter<Joke>();

    createJoke() {
        this.jokeCreated.emit(new Joke("A setup", "A punchline"));
    }

    outputSomething() {
        console.log('Output from JokeFormComponent');
    }
}


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, JokeListComponent, JokeComponent, JokeFormComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}

/* DN: Specify Bootstrapping for Browser, because Angular can be executed in Ionic mobile, NodeJS etc. */
platformBrowserDynamic().bootstrapModule(AppModule);