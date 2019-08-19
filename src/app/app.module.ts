import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NotFoundComponent } from './not-found.component';
import { ExternalUrlDirective } from './external-url.directive';

import { AppRoutingModule } from './routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, NotFoundComponent, ExternalUrlDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

