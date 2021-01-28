import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InformerComponent, TabComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { Language } from '../../shared/code-highlight/enum';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-informer-test',
  templateUrl: './informer-test.component.html',
  styleUrls: ['./informer-test.component.scss']
})
export class InformerTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {informer: InformerComponent};
  handbook = HANDBOOK;
  errors: string[] = [];
  language = Language;

  state = {ok: false};

  @ViewChild('page', {read: ElementRef, static: false})
  backdrop: ElementRef<HTMLElement>;

  @ViewChild('code') code: TabComponent;

  contentControl = this.fb.control(null);
  placementControl = this.fb.control(null);

  builder = this.fb.group({
    content: this.contentControl,
    placement: this.placementControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

  add() {
    this.errors.push('Authorization error');
  }
}
