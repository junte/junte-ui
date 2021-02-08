import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SelectableDirective, TabComponent, UI } from 'junte-ui';
import { Language } from 'src/components/handbook/shared/code-highlight/enum';
import { HANDBOOK } from 'src/consts';
import { Hero } from 'src/enums/hero';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-selectable-test',
  templateUrl: './selectable-test.component.html',
  styleUrls: ['./selectable-test.component.scss']
})
export class SelectableTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  selectable = SelectableDirective;
  handbook = HANDBOOK;
  hero = Hero;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/core/directives/selectable';

  @ViewChild('code') code: TabComponent;

  modeControl = this.fb.control(UI.select.mode.single);
  disabledControl = this.fb.control(false);
  allowEmptyControl = this.fb.control(true);

  builder = this.fb.group({
    mode: this.modeControl,
    disabled: this.disabledControl,
    allowEmpty: this.allowEmptyControl
  });

  selectableControl = this.fb.control(null);
  selectableForm = this.fb.group({
    selectable: this.selectableControl
  });

  heroes = [
    {id: Hero.spiderman, name: 'Spiderman', avatar: 'assets/images/heroes/spiderman.svg', likes: 381},
    {id: Hero.ironman, name: 'Ironman', avatar: 'assets/images/heroes/ironman.svg', likes: 412},
    {id: Hero.captainAmerica, name: 'Captain America', avatar: 'assets/images/heroes/captain.svg', likes: 221}
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges.subscribe(() => this.code.flash());
    this.disabledControl.valueChanges.subscribe(disabled =>
      disabled ? this.selectableControl.disable({emitEvent: false}) : this.selectableControl.enable({emitEvent: false}));
  }

}
