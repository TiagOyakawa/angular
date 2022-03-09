import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSearchComponent } from './features/app-search/app-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppButtonComponent } from './features/app-button/app-button.component';
import { AppTagComponent } from './features/app-tag/app-tag.component';
import { AppModalComponent } from './features/app-modal/app-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSearchComponent,
    AppButtonComponent,
    AppTagComponent,
    AppModalComponent
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
