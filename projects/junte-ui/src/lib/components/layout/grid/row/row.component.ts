import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../../decorators/api';
import { FlexAlign, FlexAlignContent, FlexDirection, FlexJustify, FlexWrap, Gutter } from '../../../../enum/ui';

@Component({
  selector: 'jnt-row',
  templateUrl: './row.encapsulated.html'
})
export class RowComponent {

  @HostBinding('attr.host') readonly host = 'jnt-row-host';

  @HostBinding('attr.align')
  _align: FlexAlign = FlexAlign.start;

  @HostBinding('attr.justify')
  _justify: FlexJustify = FlexJustify.start;

  @HostBinding('attr.direction')
  _direction: FlexDirection = FlexDirection.row;

  @HostBinding('attr.wrap')
  _wrap: FlexWrap = FlexWrap.wrap;

  @HostBinding('attr.alignContent')
  _alignContent: FlexAlignContent = FlexAlignContent.stretch;

  @HostBinding('attr.gutter')
  _gutter: Gutter = Gutter.normal;


  @PropertyApi({
    description: 'Vertical align of elements',
    path: 'ui.flex.align',
    default: FlexAlign.start,
    options: [FlexAlign.start,
      FlexAlign.center,
      FlexAlign.end,
      FlexAlign.baseline,
      FlexAlign.stretch]
  })
  @Input() set align(align: FlexAlign) {
    this._align = align || FlexAlign.start;
  }

  @PropertyApi({
    description: 'Horizontal align of elements',
    path: 'ui.flex.justify',
    default: FlexJustify.start,
    options: [FlexJustify.start,
      FlexJustify.center,
      FlexJustify.end,
      FlexJustify.between,
      FlexJustify.around,
      FlexJustify.evenly]
  })
  @Input() set justify(justify: FlexJustify) {
    this._justify = justify || FlexJustify.start;
  }

  @PropertyApi({
    description: 'Element direction',
    path: 'ui.flex.direction',
    default: FlexDirection.row,
    options: [FlexDirection.row,
      FlexDirection.rowReverse,
      FlexDirection.column,
      FlexDirection.columnReverse]
  })
  @Input() set direction(direction: FlexDirection) {
    this._direction = direction || FlexDirection.row;
  }

  @PropertyApi({
    description: 'Wrapping of elements',
    path: 'ui.flex.wrap',
    default: FlexWrap.wrap,
    options: [FlexWrap.noWrap,
      FlexWrap.wrap,
      FlexWrap.reverse]
  })
  @Input() set wrap(wrap: FlexWrap) {
    this._wrap = wrap || FlexWrap.wrap;
  }

  @PropertyApi({
    description: 'Aligns a flex container’s lines within the flex container',
    path: 'ui.flex.alignContent',
    default: FlexAlignContent.stretch,
    options: [FlexAlignContent.stretch,
      FlexAlignContent.start,
      FlexAlignContent.evenly,
      FlexAlignContent.end,
      FlexAlignContent.center,
      FlexAlignContent.between,
      FlexAlignContent.around]
  })
  @Input() set alignContent(align: FlexAlignContent) {
    this._alignContent = align || FlexAlignContent.stretch;
  }

  @PropertyApi({
    description: 'Margin top for columns',
    path: 'ui.gutter',
    default: Gutter.normal,
    options: [Gutter.tiny,
      Gutter.small,
      Gutter.normal,
      Gutter.big,
      Gutter.large,
      Gutter.huge]
  })
  @Input() set gutter(gutter: Gutter) {
    this._gutter = gutter || Gutter.normal;
  }

}
