import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'jnt-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  @HostBinding('attr.loading')
  @Input()
  loading = false;

  @HostBinding('attr.error')
  @Input()
  error = false;

  constructor() { }

  ngOnInit() {
  }

}
