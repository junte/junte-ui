import { Component, Input, OnInit } from '@angular/core';
import { UI } from 'junte-ui';
import { AnalyticsType } from 'src/enums/analyticsType';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})

export class ResourcesComponent implements OnInit {

  analyticsType = AnalyticsType;
  ui = UI;

  @Input() gitlab: string;

  @Input() figma: string;

  constructor() { }

  ngOnInit(): void {
  }

}
