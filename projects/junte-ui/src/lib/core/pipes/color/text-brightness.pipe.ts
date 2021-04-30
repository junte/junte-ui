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
    color = color.split('').map(value => value + value).join('');
  }

  return RATIO_RGB.map((value, index) => (value * parseInt(color.substr(index * 2, 2), 16)) / 1000)
    .reduce((accumulator, current) => accumulator + current);
}

export function getTextBrightness(background: string): string {
  return getBrightness(background) >= BRIGHTNESS_RATIO ? BrightnessColors.dark : BrightnessColors.light;
}

@Pipe({name: 'textBrightness'})
export class TextBrightnessPipe implements PipeTransform {
  transform(color: string): string {
    if (color === 'primary') {
      return BrightnessColors.light;
    }
    if (color === 'secondary') {
      return BrightnessColors.dark;
    }
    return getTextBrightness(color);
  }
}
