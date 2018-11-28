import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ju-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() options: any[] = [];
  @Input() labelField: string;
  @Input() valueField: string;

  constructor() { }

  ngOnInit() {
  }

}
