import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { RadioComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { Language } from '../../shared/code-highlight/enum';

export enum Hero {
  spiderman = 'spiderman',
  ironman = 'ironman',
  captainAmerica = 'captain_america'
}

@Component({
  selector: 'app-radio-test',
  templateUrl: './radio-test.component.html',
  styleUrls: ['./radio-test.component.scss']
})
export class RadioTestComponent implements OnInit {

  ui = UI;
  language = Language;
  hero = Hero;
  localUi = LocalUI;
  types = {radio: RadioComponent};

  @ViewChild('code', {static: false}) code: TabComponent;

  sizeControl = this.fb.control(null);
  disableControl = this.fb.control(false);
  checkedControl = this.fb.control(false);

  builder = this.fb.group({
    size: this.sizeControl,
    disable: this.disableControl,
    checked: this.checkedControl
  });

  heroControl = this.fb.control(null);

  form = this.fb.group({
    hero: this.heroControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }
}
