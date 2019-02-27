import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'jnt-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input() source: string;

  constructor() {
  }

  ngOnInit() {
  }

}
