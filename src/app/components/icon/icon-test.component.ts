import {Component, OnInit} from '@angular/core';
import {UI} from '../../../../projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-icon-test',
  templateUrl: './icon-test.component.html',
  styleUrls: ['./icon-test.component.scss']
})
export class IconTestComponent implements OnInit {

  ui = UI;

  constructor() {
  }

  ngOnInit() {
  }

}
