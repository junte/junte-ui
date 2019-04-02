import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Icons, Shapes, Sizes, UI } from '../../enum/ui';

@Component({
  selector: 'jnt-avatar',
  templateUrl: './encapsulated.html',
  styleUrls: ['./encapsulated.scss']
})
export class AvatarComponent implements OnInit {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-avatar-host';

  @HostBinding('attr.size')
  @Input() size: Sizes = Sizes.normal;

  @HostBinding('attr.shape')
  @Input() shape: Shapes = Shapes.circle;

  @HostBinding('attr.icon')
  @Input() icon: Icons;

  @HostBinding('attr.text')
  @Input() text: string;

  @HostBinding('attr.image')
  @Input() image: string;

  constructor() {
  }

  ngOnInit() {

  }

}
