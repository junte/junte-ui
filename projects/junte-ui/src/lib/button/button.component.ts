import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Icons, Outline, Schemes, Sizes} from '../enum/ui';

@Component({
  selector: 'ju-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @HostBinding('attr.loading')
  @Input()
  loading = false;

  @HostBinding('attr.icon')
  @Input() icon: Icons;

  @HostBinding('attr.scheme')
  @Input()
  scheme: Schemes = Schemes.primary;

  @HostBinding('attr.size')
  @Input()
  size: Sizes = null;

  @HostBinding('attr.outline')
  @Input()
  outline: Outline = Outline.fill;

  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  @HostBinding('attr.text')
  @Input()
  text = '';

  constructor() {
  }

  ngOnInit() {
  }

}
