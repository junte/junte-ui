import {Component, OnInit} from '@angular/core';
import {UI} from 'projects/junte-ui/src/lib/enum/ui';
import {FormBuilder, FormGroup} from '@angular/forms';

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
      name: [null],
      password: [null]
    });
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.editForm.valueChanges.subscribe(value => console.log(value));
  }
}
