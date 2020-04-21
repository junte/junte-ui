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

@Pipe({name: 'textBrightness'})
export class TextBrightnessPipe implements PipeTransform {
  transform(color: string): string {
    return getTextBrightness(color);
  }
}
