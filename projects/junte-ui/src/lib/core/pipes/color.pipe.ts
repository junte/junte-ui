import { Pipe, PipeTransform } from '@angular/core';

const BRIGHTNESS_RATIO = 150;
const RATIO_RGB = [299, 587, 114];

enum BrightnessColors {
  light = '#FFF',
  dark = '#4F4F4F'
}

function getBrightness(color: string): number {
  color = color.substr(1);
  if (color.length === 3) {
    color = color.split('').map(v => v + v).join('');
  }

  const rgb = [0, 0, 0];
  return rgb.map((v, i) => (RATIO_RGB[i] * parseInt(color.substr(i * 2, 2), 16)) / 1000)
    .reduce((a, c) => a + c);
}

export function getTextBrightness(background: string): string {
  return getBrightness(background) >= BRIGHTNESS_RATIO ? BrightnessColors.dark : BrightnessColors.light;
}


export function changeColor(color: string, value: number): string {
  const rgbColor = Math.round(parseInt(color, 16) - value);
  const validRgb = rgbColor > 255 ? 255 : rgbColor < 0 ? 0 : rgbColor;

  return (validRgb.toString(16).length > 1) ? validRgb.toString(16) : `0${validRgb.toString(16)}`;
}

export function darkenLighten(color: string, amount: number): string {
  color = (color.startsWith('#')) ? color.substring(1, color.length) : color;
  amount = (255 * amount) / 100;
  return `#${changeColor(color.substring(0, 2), amount)}${changeColor(color.substring(2, 4), amount)}${changeColor(color.substring(4, 6), amount)}`;
}

@Pipe({name: 'lightenDarken'})
export class LightenDarkenPipe implements PipeTransform {
  transform(color: string, value: number): string {
    return darkenLighten(color, value);
  }
}

@Pipe({name: 'textBrightness'})
export class TextBrightnessPipe implements PipeTransform {
  transform(color: string): string {
    return getTextBrightness(color);
  }
}
