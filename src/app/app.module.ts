import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSearchComponent } from './features/app-search/app-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppButtonComponent } from './features/app-button/app-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSearchComponent,
    AppButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
