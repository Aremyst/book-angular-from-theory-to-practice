import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { AsyncPipeObservableComponent } from './async-pipe-observable/async-pipe-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPipeComponent,
    AsyncPipeObservableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
