import { Component, OnInit, ViewChild } from '@angular/core';
import { UI } from 'junte-ui';
import { FormBuilder, FormControl } from '@angular/forms';
import { TabComponent } from 'junte-ui';
import { ButtonComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-buttons-test',
  templateUrl: './buttons-test.component.html',
  styleUrls: ['./buttons-test.component.scss']
})
export class ButtonsTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  button = ButtonComponent;

  @ViewChild('code', {static: false}) code: TabComponent;

  schemeControl = new FormControl(UI.schemes.primary);
  sizeControl = new FormControl(UI.sizes.normal);
  outlineControl = new FormControl(UI.outline.fill);
  widthControl = new FormControl(UI.width.default);
  typeControl = new FormControl(UI.form.button.type.button);
  loadingControl = new FormControl(false);
  disabledControl = new FormControl(false);
  iconControl = new FormControl(false);
  badgeControl = new FormControl(false);
  textControl = new FormControl(true);

  form = this.fb.group({
    scheme: this.schemeControl,
    size: this.sizeControl,
    outline: this.outlineControl,
    width: this.widthControl,
    type: this.typeControl,
    loading: this.loadingControl,
    disabled: this.disabledControl,
    icon: this.iconControl,
    badge: this.badgeControl,
    text: this.textControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }
}
