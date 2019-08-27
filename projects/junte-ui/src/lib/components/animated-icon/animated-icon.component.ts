import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'jnt-animated-icon',
  templateUrl: './animated-icon.component.html',
  styleUrls: ['./animated-icon.component.scss']
})
export class AnimatedIconComponent implements OnInit {

  @Input() icon: string;

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

}
