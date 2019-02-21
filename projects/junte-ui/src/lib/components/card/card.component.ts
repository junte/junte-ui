import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'jnt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() header: TemplateRef<any>;
  @Input() body: TemplateRef<any>;
  @Input() footer: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
