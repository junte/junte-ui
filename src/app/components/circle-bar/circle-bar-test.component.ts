import { Component } from '@angular/core';
import { UI } from 'projects/junte-ui/src/lib/enum/ui';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-circle-bar-test',
  templateUrl: './circle-bar-test.component.html',
  styleUrls: ['./circle-bar-test.component.scss']
})
export class CircleBarTestComponent {

  ui = UI;

  value = 60;

  constructor(private sanitizer: DomSanitizer) {}

  safe(source: string) {
    return this.sanitizer.bypassSecurityTrustStyle(source);
  }
}
