import { Component } from '@angular/core';
import {Size} from '../../projects/junte-ui/src/lib/models/size';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  size = Size;

  selectedOption: any;
  options: any[] = [
    {value: 1, label: 'Option 1'},
    {value: 2, label: 'Option 2'},
    {value: 3, label: 'Option 3'},
  ];
}
