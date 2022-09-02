import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReactiveFormRangeSliderComponent } from './reactive-form-range-slider/reactive-form-range-slider.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgxSliderModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ReactiveFormRangeSliderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
