import { Component, ViewChild } from '@angular/core';
import { UI } from 'junte-ui';
import { BlockComponent } from 'junte-ui';

@Component({
  selector: 'app-blocks-test',
  templateUrl: './blocks-test.component.html',
  styleUrls: ['./blocks-test.component.scss']
})
export class BlocksTestComponent {
  ui = UI;

  @ViewChild('block', {static: false})
  block: BlockComponent;
}
