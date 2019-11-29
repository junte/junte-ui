import { Component, HostBinding, Input } from '@angular/core';
import { FlexAlign, FlexAlignSelf, StackType } from '../../../enum/ui';
import { api } from '../../../decorators/api';

@Component({
  selector: 'jnt-col',
  templateUrl: './col.encapsulated.html'
})
export class ColComponent {

  @HostBinding('attr.host') readonly host = 'jnt-col-host';

  @HostBinding('attr.span')
  _span = 1;

  @HostBinding('attr.alignSelf')
  _alignSelf: FlexAlignSelf = FlexAlignSelf.auto;

  @api({
    description: 'Number of cells to occupy',
    path: '',
    default: '1',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  })

  @Input() set span(span: number) {
    if (!!span) {
      this._span = span;
    } else {
      this._span = 1;
    }
  }

  @api({
    description: 'Number of cells to occupy on screen resolution < 768px',
    path: '',
    default: '1',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  })

  @HostBinding('attr.mobile')
  @Input() mobile: number = null;

  @api({
    description: 'Number of cells to occupy on screen resolution >= 768px',
    path: '',
    default: '1',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  })

  @HostBinding('attr.tablet')
  @Input() tablet: number = null;

  @api({
    description: 'Number of cells to occupy on screen resolution >= 992px',
    path: '',
    default: '1',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  })

  @HostBinding('attr.desktop')
  @Input() desktop: number = null;

  @api({
    description: 'Number of cells to occupy on screen resolution >= 1200px',
    path: '',
    default: '1',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  })

  @HostBinding('attr.wide')
  @Input() wide: number = null;

  @api({
    description: 'Vertical align of specific elements.',
    path: 'ui.flex.alignSelf',
    default: FlexAlignSelf.auto,
    options: [FlexAlignSelf.auto, FlexAlignSelf.start, FlexAlignSelf.end, FlexAlignSelf.baseline, FlexAlignSelf.stretch, FlexAlignSelf.center]
  })

  @Input() set alignSelf(align: FlexAlignSelf) {
    if (!!align) {
      this._alignSelf = align;
    } else {
      this._alignSelf = FlexAlignSelf.auto;
    }
  }

}
