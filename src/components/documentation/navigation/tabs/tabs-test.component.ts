import { Component, OnInit } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-tabs-test',
  templateUrl: './tabs-test.component.html',
  styleUrls: ['./tabs-test.component.scss']
})
export class TabsTestComponent implements OnInit {
  ui = UI;
  tabs = [
    {title: 'Information', content: 'Content Tab 1'},
    {title: 'Settings', content: 'Content Tab 2'},
    {title: 'Documentation', content: 'Content Tab 3'},
    {title: 'General', content: 'Content Tab 4'}
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.tabs.push({title: 'Tab 5', content: 'Content Tab 5'}), 5000);
  }

}
