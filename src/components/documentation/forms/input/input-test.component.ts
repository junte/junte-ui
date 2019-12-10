import { Component, OnInit } from '@angular/core';
import { UI } from 'junte-ui';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss']
})
export class InputTestComponent implements OnInit {

  ui = UI;

  editForm = this.formBuilder.group({
    texts: this.formBuilder.array([this.inputGroup(), this.inputGroup(), this.inputGroup(), this.inputGroup()]),
    passwords: this.formBuilder.array([this.inputGroup(), this.inputGroup(), this.inputGroup(), this.inputGroup()])
  });

  inputGroup() {
    return this.formBuilder.group({
      name: this.formBuilder.control([null]),
      password: this.formBuilder.control([null])
    });
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.editForm.valueChanges.subscribe(value => console.log(value));
  }
}
