import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-buttons-test',
  templateUrl: './buttons-test.component.html',
  styleUrls: ['./buttons-test.component.scss']
})
export class ButtonsTestComponent {

  ui = UI;

  schemes: any[] = [
    {value: UI.schemes.primary, label: UI.schemes.primary},
    {value: UI.schemes.secondary, label: UI.schemes.secondary},
    {value: UI.schemes.fail, label: UI.schemes.fail},
    {value: UI.schemes.success, label: UI.schemes.success},
  ];

  sizes: any[] = [
    {value: UI.sizes.tiny, label: UI.sizes.tiny},
    {value: UI.sizes.small, label: UI.sizes.small},
    {value: UI.sizes.normal, label: UI.sizes.normal},
    {value: UI.sizes.large, label: UI.sizes.large},
  ];

  outlines: any[] = [
    {value: UI.outline.fill, label: UI.outline.fill},
    {value: UI.outline.ghost, label: UI.outline.ghost},
    {value: UI.outline.transparent, label: UI.outline.transparent},
  ];

  schemeControl = new FormControl(UI.schemes.primary);
  sizeControl = new FormControl(UI.sizes.normal);
  outlineControl = new FormControl(UI.outline.fill);

  form = this.fb.group({
    scheme: this.schemeControl,
    size: this.sizeControl,
    outline: this.outlineControl
  });

  constructor(private fb: FormBuilder) {
  }
}
