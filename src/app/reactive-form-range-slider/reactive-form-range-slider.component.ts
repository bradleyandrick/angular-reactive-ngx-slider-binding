import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-reactive-form-range-slider',
  templateUrl: './reactive-form-range-slider.component.html',
  styleUrls: ['./reactive-form-range-slider.component.css'],
})
export class ReactiveFormRangeSliderComponent {
  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([20, 80]),
    testButton: new FormControl([null, null]),
    sliderInput: new FormControl([, null]),
  });
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 5,
  };

  resetForm(): void {
    this.sliderForm.reset({ sliderControl: [20, 80] });
  }

  updateSliderControl(): void {
    const inputValue = this.sliderForm.get('sliderInput').value;
    this.sliderForm.reset({ sliderControl: [inputValue, 80] });
    this.sliderForm.controls['sliderInput'].setValue(inputValue);
  }
}
