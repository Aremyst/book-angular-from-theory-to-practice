import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgForGroupedExampleComponent } from './ng-for-grouped-example/ng-for-grouped-example.component';

@NgModule({
  declarations: [
    AppComponent,
    NgForExampleComponent,
    NgForGroupedExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
