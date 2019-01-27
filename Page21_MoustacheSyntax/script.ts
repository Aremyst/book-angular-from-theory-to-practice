import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Component} from '@angular/core';

/* DN: Decorator. Root component. */
@Component({
    /* DN: Look for <joke> tag */
    selector: 'joke',
    template: `
        <h1>{{setup}}</h1>
        <p>{{punchline}}</p>
    `
})
class JokeComponent {
    setup: string;
    punchline: string;

    constructor() {
        this.setup = "What did the cheese say when it looked in the mirror?";
        this.punchline = "Halloumi (Hello Me)";
    }
}

/* DN: Decorator. Root Module. */
@NgModule({
    imports: [BrowserModule],
    declarations: [JokeComponent],
    /* DN: JokeComponent is a root component, since it's used for bootstrapping */
    bootstrap: [JokeComponent]
})
export class AppModule {
}

/* DN: Specify Bootstrapping for Browser, because Angular can be executed in Ionic mobile, NodeJS etc. */
platformBrowserDynamic().bootstrapModule(AppModule);