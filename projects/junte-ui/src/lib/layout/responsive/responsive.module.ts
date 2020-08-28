import { NgModule } from '@angular/core';
import { BreakpointService } from './breakpoint.service';
import { ForAndroidPlatformDirective, ForDesktopDirective, ForIOSPlatformDirective, ForMobileDirective } from './device.directives';
import { DeviceService } from './device.service';
import { ForDirective, ForMaxDirective, ForMinDirective } from './responsive.directives';

@NgModule({
  declarations: [
    ForDirective,
    ForMinDirective,
    ForMaxDirective,
    ForMobileDirective,
    ForIOSPlatformDirective,
    ForAndroidPlatformDirective,
    ForDesktopDirective
  ],
  exports: [
    ForDirective,
    ForMinDirective,
    ForMaxDirective,
    ForMobileDirective,
    ForIOSPlatformDirective,
    ForAndroidPlatformDirective,
    ForDesktopDirective
  ],
  providers: [
    BreakpointService,
    DeviceService
  ]
})
export class ResponsiveModule {

}
