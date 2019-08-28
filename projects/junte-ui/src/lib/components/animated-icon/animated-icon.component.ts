import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jnt-animated-icon',
  templateUrl: './animated-icon.component.html',
  styleUrls: ['./animated-icon.component.scss']
})
export class AnimatedIconComponent implements OnInit {

  source: string;
  @Input() icon: string;
  @Input() iconset: string = '';

  ngOnInit() {
    this.source = `assets/icons/animated/${!!this.iconset ? this.iconset + '/' : ''}${this.icon}.svg`;
  }
}
