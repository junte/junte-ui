import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-test',
  templateUrl: './checkbox-test.component.html',
  styleUrls: ['./checkbox-test.component.scss']
})
export class CheckboxTestComponent {

  ui = UI;
  checkboxControl = new FormControl(true);

  acceptForm = this.fb.group({
    checkbox: this.checkboxControl
  });

  userGroupControl = new FormControl(['Bob', 'Tom']);

  userGroup = this.fb.group({
    userGroup: this.userGroupControl
  });

  constructor(private fb: FormBuilder) {
  }

}
