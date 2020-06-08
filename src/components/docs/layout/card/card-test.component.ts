import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CardComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-card-test',
  templateUrl: './card-test.component.html',
  styleUrls: ['./card-test.component.scss']
})
export class CardTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;

  @ViewChild('code')
  code: TabComponent;

  types = {card: CardComponent};

  schemeControl = this.fb.control(null);
  paddingControl = this.fb.control(null);
  titleControl = this.fb.control(false);
  widthControl = this.fb.control(null);
  stateControl = this.fb.control(null);
  clickableControl = this.fb.control(false);
  iconControl = this.fb.control(false);
  actionsControl = this.fb.control(false);

  builder = this.fb.group({
    padding: this.paddingControl,
    state: this.stateControl,
    width: this.widthControl,
    scheme: this.schemeControl,
    title: this.titleControl,
    clickable: this.clickableControl,
    icon: this.iconControl,
    actions: this.actionsControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
