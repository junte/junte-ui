import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UI } from 'junte-ui';
import { TabComponent } from 'junte-ui';
import { LabelComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-label-test',
  templateUrl: './label-test.component.html',
  styleUrls: ['./label-test.component.scss']
})
export class LabelTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  label = LabelComponent;

  @ViewChild('code', {static: false}) code: TabComponent;

  iconControl = new FormControl(false);
  sizeControl = new FormControl(UI.size.normal);
  colorControl = new FormControl('#00227B');

  form = this.fb.group({
    icon: this.iconControl,
    size: this.sizeControl,
    color: this.colorControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }

}
