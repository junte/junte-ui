import { Component } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-animated-icon-test',
  templateUrl: './animated-icon-test.component.html',
  styleUrls: ['./animated-icon-test.component.scss']
})
export class AnimatedIconTestComponent {

  ui = UI;

  icons: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.icons = Object.keys(UI.animatedIcons)
      .map(icon => ({name: icon, value: UI.animatedIcons[icon]}));
  }
}
