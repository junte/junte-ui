import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InformerComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-informer-test',
  templateUrl: './informer-test.component.html',
  styleUrls: ['./informer-test.component.scss']
})
export class InformerTestComponent {

  ui = UI;
  localUi = LocalUI;
  types = {informer: InformerComponent};
  errors: string[] = [];

  state = {ok: false};

  @ViewChild('page', {read: ElementRef, static: false})
  backdrop: ElementRef<HTMLElement>;

  contentControl = this.fb.control(null);
  placementControl = this.fb.control(null);

  builder = this.fb.group({
    content: this.contentControl,
    placement: this.placementControl
  });

  constructor(private fb: FormBuilder) {
  }

  add() {
    this.errors.push('Authorization error');
  }
}
