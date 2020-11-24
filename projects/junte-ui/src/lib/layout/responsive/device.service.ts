import { Injectable } from '@angular/core';

@Injectable()
export class DeviceService {

  isBlackBerry = !!navigator.userAgent.match(/BlackBerry/i);
  isIPhone = !!navigator.userAgent.match(/iPhone/i);
  isIPad = !!navigator.userAgent.match(/iPad/i);
  isIPod = !!navigator.userAgent.match(/iPod/i);
  isOpera = !!navigator.userAgent.match(/Opera Mini/i);

  platform = {
    isIOS: this.isIPhone || this.isIPad || this.isIPod,
    isAndroid: !!navigator.userAgent.match(/Android/i),
    isWindowsMobile: !!navigator.userAgent.match(/IEMobile/i),
    windows: !!navigator.userAgent.match(/Windows|Win32|Win64/i),
  };

  isMobile = this.platform.isIOS
    || this.platform.isAndroid
    || this.isBlackBerry
    || this.isOpera
    || this.platform.isWindowsMobile;

  isDesktop = window.orientation === undefined;
}
