import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder } from '@angular/forms';
import { SpinnerComponent } from 'junte-ui';

@Component({
  selector: 'app-spinner-test',
  templateUrl: './spinner-test.component.html',
  styleUrls: ['./spinner-test.component.scss']
})
export class SpinnerTestComponent {

  ui = UI;
  localUi = LocalUI;
  types = {spinner: SpinnerComponent};

  sizeControl = this.fb.control(null);

  form = this.fb.group({
    size: this.sizeControl,
  });

  constructor(private fb: FormBuilder) {
  }
}
