import { Component, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'jnt-card',
  templateUrl: './card.encapsulated.html'
})
export class CardComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-card-host';

  @Input() header: TemplateRef<any>;
  @Input() body: TemplateRef<any>;
  @Input() footer: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
