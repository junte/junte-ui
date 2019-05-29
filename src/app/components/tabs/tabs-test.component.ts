import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-test',
  templateUrl: './tabs-test.component.html',
  styleUrls: ['./tabs-test.component.scss']
})
export class TabsTestComponent implements OnInit {

  tabs = [
    {title: 'Tab 1', content: 'Content Tab 1'},
    {title: 'Tab 2', content: 'Content Tab 2'},
    {title: 'Tab 3', content: 'Content Tab 3'},
    {title: 'Tab 4', content: 'Content Tab 4'}
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.tabs.push({title: 'Tab 5', content: 'Content Tab 5'}), 5000);
  }

}
