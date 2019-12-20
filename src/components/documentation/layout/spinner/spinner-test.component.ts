import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder, FormControl } from '@angular/forms';
import { Sizes } from 'junte-ui';
import { SpinnerComponent } from 'junte-ui';

@Component({
  selector: 'app-spinner-test',
  templateUrl: './spinner-test.component.html',
  styleUrls: ['./spinner-test.component.scss']
})
export class SpinnerTestComponent {

  ui = UI;
  localUi = LocalUI;
  spinner = SpinnerComponent;

  size = new FormControl(Sizes.normal);

  form = this.fb.group({
    size: this.size,
  });

  constructor(private fb: FormBuilder) {
  }
}
