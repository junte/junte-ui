import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UI } from 'junte-ui';
import { CollapsibleComponent, TabComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import {Language} from '../../../../enums/language';

@Component({
  selector: 'app-collapsible-test',
  templateUrl: './collapsible-test.component.html',
  styleUrls: ['./collapsible-test.component.scss']
})
export class CollapsibleTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  types = {collapsible: CollapsibleComponent};

  @ViewChild('code')
  code: TabComponent;

  titleControl = this.fb.control(false);
  iconControl = this.fb.control(true);
  openedControl = this.fb.control(false);
  orientationControl = this.fb.control(false);

  builder = this.fb.group({
    title: this.titleControl,
    icon: this.iconControl,
    opened: this.openedControl,
    orientation: this.orientationControl
  });

  constructor(private fb: FormBuilder,
              @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());

    this.titleControl.valueChanges.subscribe(value =>
      value ? this.iconControl.disable({emitEvent: false}) : this.iconControl.enable({emitEvent: false}));
  }

}
