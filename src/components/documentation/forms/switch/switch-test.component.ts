import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-switch-test',
  templateUrl: './switch-test.component.html',
  styleUrls: ['./switch-test.component.scss']
})
export class SwitchTestComponent {
  ui = UI;
  checked = true;

  switchForm = this.fb.group({
    switch: [false, [Validators.required]]
  });

  themeForm = this.fb.group({
    theme: [UI.themes.light]
  });

  constructor(private fb: FormBuilder) {
  }
}
