import { Injectable } from '@angular/core';

@Injectable()
export class DeviceService {

  platform = {
    iOS: !!navigator.userAgent.match(/iPhone|iPad|iPod/i),
    android: !!navigator.userAgent.match(/Android/i),
    blackBerry: !!navigator.userAgent.match(/BlackBerry/i),
    windowsMobile: !!navigator.userAgent.match(/IEMobile/i),
    mac: !!navigator.userAgent.match(/Mac/i),
    linux: !!navigator.userAgent.match(/Linux/i),
    windows: !!navigator.userAgent.match(/Windows|Win32|Win64/i),
  };

  mobile = !!navigator.userAgent.match(/Mobile/i)
    || this.platform.iOS
    || this.platform.android
    || this.platform.blackBerry
    || this.platform.windowsMobile;

  desktop = window.orientation === undefined;
}
