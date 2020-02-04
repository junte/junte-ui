import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UI } from 'junte-ui';
import { TabComponent, IconComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-icon-test',
  templateUrl: './icon-test.component.html',
  styleUrls: ['./icon-test.component.scss']
})
export class IconTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  icon = IconComponent;

  @ViewChild('code', {static: false}) code: TabComponent;

  icons = [];

  sizeControl = new FormControl(UI.size.normal);

  form = this.fb.group({
    size: this.sizeControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }

  refresh() {

  }
}
