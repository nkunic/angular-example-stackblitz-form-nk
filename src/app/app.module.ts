import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputModule } from './input/input.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, InputModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
