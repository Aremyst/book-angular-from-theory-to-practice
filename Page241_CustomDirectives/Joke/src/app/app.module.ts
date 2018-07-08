import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {JokeComponent} from "./joke/joke.component";
import {JokeListComponent} from "./joke-list/joke-list.component";
import {JokeFormComponent} from "./joke-form/joke-form.component";
import { CardHoverDirective } from './directives/card-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    CardHoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  /* AppComponent is a root component, since it's used for bootstrapping */
  bootstrap: [AppComponent]
})
export class AppModule {
}
