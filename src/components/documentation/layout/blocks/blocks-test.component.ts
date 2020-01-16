import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { BlockComponent, UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';

@Component({
  selector: 'app-blocks-test',
  templateUrl: './blocks-test.component.html',
  styleUrls: ['./blocks-test.component.scss']
})
export class BlocksTestComponent {

  ui = UI;
  localUi = LocalUI;
  types = {block: BlockComponent};

  @ViewChild('block', {static: false})
  block: BlockComponent;

  padding = new FormControl(UI.padding.normal);
  title = new FormControl(true);
  footer = new FormControl(true);
  state = new FormControl();
  width = new FormControl(UI.width.default);
  type = new FormControl(UI.block.type.simple);

  form = this.fb.group({
    padding: this.padding,
    title: this.title,
    footer: this.footer,
    state: this.state,
    width: this.width,
    type: this.type
  });

  constructor(private fb: FormBuilder) {
  }
}
