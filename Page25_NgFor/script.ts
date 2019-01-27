import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Component} from '@angular/core';

/* DN: Decorator. Root component. */
@Component({
    selector: 'joke-list',
    template: `
        <div class="card card-block" *ngFor="let joke of jokes">
            <h4 class="card-title">{{joke.setup}}</h4>
            <p class="card-text">{{joke.punchline}}</p>
        </div>
    `
})
class JokeListComponent {
    jokes: Object[];

    constructor() {
        this.jokes = [
            {
                setup: "What did the cheese say when it looked in the mirror?",
                punchline: "Hello-Me (Halloumi)"
            },
            {
                setup: "What kind of cheese do you use to disguise a small horse?",
                punchline: "Mask-a-pony (Mascarpone)"
            },
            {
                setup: "A kid threw a lump of cheddar at me",
                punchline: "I thought ‘That’s not very mature’"
            },
        ];
    }
}

/* DN: Decorator. Root Module. */
@NgModule({
    imports: [BrowserModule],
    declarations: [JokeListComponent],
    /* DN: JokeComponent is a root component, since it's used for bootstrapping */
    bootstrap: [JokeListComponent]
})
export class AppModule {
}

/* DN: Specify Bootstrapping for Browser, because Angular can be executed in Ionic mobile, NodeJS etc. */
platformBrowserDynamic().bootstrapModule(AppModule);