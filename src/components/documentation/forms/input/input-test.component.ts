import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss']
})
export class InputTestComponent implements OnInit {

  ui = UI;

  changeControl = new FormControl();
  disabledControl = new FormControl({value: null, disabled: true});

  inputGroup = this.fb.group({
    name: this.fb.control([null]),
    password: this.fb.control([null])
  });

  form = this.fb.group({
    texts: this.fb.array([this.inputGroup, this.inputGroup, this.inputGroup, this.inputGroup]),
    disabled: this.disabledControl,
    passwords: this.fb.array([this.inputGroup, this.inputGroup, this.inputGroup, this.inputGroup]),
    change: this.changeControl
  });


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(value => console.log(value));
  }

  change() {
    this.changeControl.patchValue('changed');
  }
}
