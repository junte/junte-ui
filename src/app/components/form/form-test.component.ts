import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit {

  ui = UI;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [ null, [ Validators.required, Validators.minLength(3) ] ],
      fullName: [ null, [ Validators.required, Validators.minLength(5) ] ]
    });
  }

  submitForm(): void {
    alert('form send');
  }

}
