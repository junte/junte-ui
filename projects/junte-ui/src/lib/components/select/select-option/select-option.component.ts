import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jnt-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnInit {

  @Input() value: any;
  @Input() label: string;

  constructor() {
  }

  ngOnInit() {
  }

}
