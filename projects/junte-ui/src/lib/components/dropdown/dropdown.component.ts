import { Component, ContentChild, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';
import { DropdownMode, DropdownPositions, UI } from '../../enum/ui';

@Component({
  selector: 'jnt-dropdown',
  templateUrl: './encapsulated.html'
})
export class DropdownComponent implements OnInit {

  ui = UI;
  dropdownMode = DropdownMode;

  @HostBinding('attr.host') readonly host = 'jnt-dropdown-host';

  @HostBinding('attr.toggle') toggle: boolean;

  @HostBinding('attr.mode')
  @Input() mode = DropdownMode.hover;

  @HostBinding('attr.position')
  @Input() position = DropdownPositions.bottomLeft;

  @ContentChild('trigger')
  trigger: TemplateRef<any>;

  @ContentChild('menu')
  menu: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }
}
