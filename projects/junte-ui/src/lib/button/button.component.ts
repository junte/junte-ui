import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Icons, Sizes, Types} from '../enum/ui';

@Component({
  selector: 'ju-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() icon: Icons;

  @HostBinding('class.loading')
  @Input()
  loading = false;

  @Input()
  type: Types = Types.primary;

  @Input()
  size: Sizes = Sizes.small;

  @Input() text: string;

  @HostBinding('class')
  get class() {
    return [this.type, this.size, this.loading ? 'loading' : null].join(' ');
  }

  constructor() {
  }

  ngOnInit() {
  }

}
