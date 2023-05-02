import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      inputOne: new FormControl(),
      inputTwo: new FormControl(),
      inputThree: new FormControl(),
      inputFour: new FormControl({value: '', disabled: true}, Validators.required),
    });
  }


}
