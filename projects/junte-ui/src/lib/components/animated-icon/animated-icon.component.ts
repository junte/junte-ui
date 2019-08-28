import { Component, Input } from '@angular/core';

@Component({
  selector: 'jnt-animated-icon',
  templateUrl: './animated-icon.component.html',
  styleUrls: ['./animated-icon.component.scss']
})
export class AnimatedIconComponent {

  @Input() icon: string;

}
