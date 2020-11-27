import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalService, ShortcutsDirective, TabComponent, UI } from 'junte-ui';
import { Language } from 'src/components/docs/shared/code-highlight/enum';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-shortcuts-test',
  templateUrl: './shortcuts-test.component.html',
  styleUrls: ['./shortcuts-test.component.scss']
})
export class ShortcutsTestComponent {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  actions = {anonym: 'Anonym', bound: 'Bound'};
  types = {shortcuts: ShortcutsDirective};
  value: string;
  keys = Object.keys(UI.keyboard.key);
  modifiers = Object.keys(UI.keyboard.modifier);

  @ViewChild('code') code: TabComponent;

  keyControl = this.fb.control(UI.keyboard.key.enter);
  modifierControl = this.fb.control(null);

  builder = this.fb.group({
    key: this.keyControl,
    modifier: this.modifierControl
  });

  form = this.fb.group({
    boundAction: [],
    anonymAction: []
  })

  constructor(private modalService: ModalService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

  anonymAction = () => {
    this.value = `${this.actions.anonym} action was called`;
  };

  boundAction() {
    this.value = `${this.actions.bound} action was called`;
  }
}