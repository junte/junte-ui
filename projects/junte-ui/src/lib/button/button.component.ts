import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Size} from '../models/size';

@Component({
  selector: 'ju-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  size: Size = Size.default;

  @HostBinding('class.small')
  get small() {
    return this.size === Size.small;
  }

  @HostBinding('class.large')
  get large() {
    return this.size === Size.large;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
