import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ju-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input()
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
