import { Component, ViewChild } from '@angular/core';
import { UI } from 'junte-ui';
import { BlockComponent } from '../../../../projects/junte-ui/src/lib/components/block/block.component';

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
