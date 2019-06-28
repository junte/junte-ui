import { Component, OnInit } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-skeleton-test',
  templateUrl: './skeleton-test.component.html',
  styleUrls: ['./skeleton-test.component.scss']
})
export class SkeletonTestComponent implements OnInit {

  ui = UI;

  constructor() {
  }

  ngOnInit() {
  }

}
