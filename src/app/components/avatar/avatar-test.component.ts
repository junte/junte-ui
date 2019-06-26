import { Component, OnInit } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-avatar-test',
  templateUrl: './avatar-test.component.html',
  styleUrls: ['./avatar-test.component.scss']
})
export class AvatarTestComponent implements OnInit {

  ui = UI;

  constructor() {
  }

  ngOnInit() {
  }

}
