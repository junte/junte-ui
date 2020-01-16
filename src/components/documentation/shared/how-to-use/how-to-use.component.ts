import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.scss']
})
export class HowToUseComponent {

  @Input()
  test: { selector: string, type: string };

  @Input()
  scss: string;

}
