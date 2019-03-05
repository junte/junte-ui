import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jnt-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input() source: string;

  @HostBinding('attr.fluid')
  @Input() fluid: false;

  constructor() {
  }

  ngOnInit() {
  }

}
