import { Directive, EmbeddedViewRef, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { DeviceService } from './device.service';

export abstract class DeviceDirective implements OnInit {

  protected constructor(private templateRef: TemplateRef<any>,
                        private viewContainerRef: ViewContainerRef,
                        private device: boolean) {
  }

  private view: EmbeddedViewRef<any>;

  ngOnInit() {
    this.matched(this.device);
  }

  private matched(device: boolean) {
    if (!this.view) {
      if (device) {
        this.view = this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        if (!!this.view) {
          this.viewContainerRef.clear();
          this.view = null;
        }
      }
    }
  }
}

@Directive({
  selector: '[jntForMobileDevice]'
})
export class ForMobileDirective extends DeviceDirective {

  constructor(templateRef: TemplateRef<any>,
              viewContainerRef: ViewContainerRef,
              devices: DeviceService) {
    super(templateRef, viewContainerRef, devices.isMobile);
  }
}

@Directive({
  selector: '[jntForIOSPlatform]'
})
export class ForIOSPlatformDirective extends DeviceDirective {

  constructor(templateRef: TemplateRef<any>,
              viewContainerRef: ViewContainerRef,
              devices: DeviceService) {
    super(templateRef, viewContainerRef, devices.platform.isIOS);
  }
}

@Directive({
  selector: '[jntForAndroidPlatform]'
})
export class ForAndroidPlatformDirective extends DeviceDirective {

  constructor(templateRef: TemplateRef<any>,
              viewContainerRef: ViewContainerRef,
              devices: DeviceService) {
    super(templateRef, viewContainerRef, devices.platform.isAndroid);
  }
}

@Directive({
  selector: '[jntForDesktop]'
})
export class ForDesktopDirective extends DeviceDirective {

  constructor(templateRef: TemplateRef<any>,
              viewContainerRef: ViewContainerRef,
              devices: DeviceService) {
    super(templateRef, viewContainerRef, devices.isDesktop);
  }
}
