import { Pipe, PipeTransform } from '@angular/core';

const changeColor = (color: string, value: number): string => {
  const rgbColor = Math.round(parseInt(color, 16) - value);
  const validRgb = rgbColor > 255 ? 255 : rgbColor < 0 ? 0 : rgbColor;

  return (validRgb.toString(16).length > 1) ? validRgb.toString(16) : `0${validRgb.toString(16)}`;
};

const darkenLighten = (color: string, amount: number): string => {
  color = (color.startsWith('#')) ? color.substring(1, color.length) : color;
  amount = (255 * amount) / 100;
  return `#${changeColor(color.substring(0, 2), amount)}${changeColor(color.substring(2, 4), amount)}${changeColor(color.substring(4, 6), amount)}`;
};


@Pipe({name: 'lightenDarkenColor'})
export class LightenDarkenPipe implements PipeTransform {
  transform(color: string, value: number): string {
    return darkenLighten(color, value);
  }
}
