import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder, FormControl } from '@angular/forms';
import { TypeBlock, Width } from 'junte-ui';
import { BlockComponent } from 'junte-ui';

@Component({
  selector: 'app-blocks-test',
  templateUrl: './blocks-test.component.html',
  styleUrls: ['./blocks-test.component.scss']
})
export class BlocksTestComponent {
  ui = UI;
  localUi = LocalUI;
  block = BlockComponent;

  padding = new FormControl();
  title = new FormControl();
  footer = new FormControl();
  state = new FormControl();
  width = new FormControl(Width.default);
  type = new FormControl(TypeBlock.simple);

  form = this.builder.group({
    padding: this.padding,
    title: this.title,
    footer: this.footer,
    state: this.state,
    width: this.width,
    type: this.type
  });

  constructor(private builder: FormBuilder) {
  }
}
