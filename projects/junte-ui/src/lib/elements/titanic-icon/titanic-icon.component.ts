import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jnt-titanic-icons',
  templateUrl: './titanic-icon.component.html',
  styleUrls: ['./titanic-icon.component.scss']
})
export class TitanicIconComponent implements OnInit {

  titanic = new Titanic();

  constructor() { }

  ngOnInit(): void {
  }

}
