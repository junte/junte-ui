import { ChangeDetectorRef, Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { UI } from '../../../../core/enums/ui';
import { PopoverInstance } from '../../../../overlays/popover/popover.service';
import { BreakpointService } from '../../../responsive/breakpoint.service';

@Component({
  selector: 'jnt-app-header-userbar',
  templateUrl: './app-header-userbar.encapsulated.html'
})
export class AppHeaderUserbarComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-header-userbar-host';

  ui = UI;

  reference: { popover: PopoverInstance } = {popover: null};

  @ContentChild('userbarAvatarTemplate')
  userbarAvatarTemplate: TemplateRef<any>;

  @ContentChild('userbarMenuTemplate')
  userbarMenuTemplate: TemplateRef<any>;

  @Input()
  context: { header: { hide: Function } };

  constructor(public breakpoint: BreakpointService,
              private logger: NGXLogger,
              public cd: ChangeDetectorRef) {
  }

  hide() {
    this.logger.debug('hide userbar dropdown');
    if (!!this.reference.popover) {
      this.reference.popover.hide();
      this.reference.popover = null;
    }
  }

}
