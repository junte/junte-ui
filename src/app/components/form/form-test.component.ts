import {Component, OnInit} from '@angular/core';
import {UI} from '../../../../projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit {

  ui = UI;

  constructor() {
  }

  ngOnInit() {
  }

}
