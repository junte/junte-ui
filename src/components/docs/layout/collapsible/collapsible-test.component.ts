import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UI } from 'junte-ui';
import { CollapsibleComponent, TabComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-collapsible-test',
  templateUrl: './collapsible-test.component.html',
  styleUrls: ['./collapsible-test.component.scss']
})
export class CollapsibleTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {collapsible: CollapsibleComponent};

  @ViewChild('code')
  code: TabComponent;

  titleControl = this.fb.control(false);
  iconControl = this.fb.control(true);

  builder = this.fb.group({
    title: this.titleControl,
    icon: this.iconControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());

    this.titleControl.valueChanges.subscribe(value =>
      value ? this.iconControl.disable() : this.iconControl.enable());
  }

}
