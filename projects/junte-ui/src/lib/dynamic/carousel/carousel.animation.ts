import { animate, state, style, transition, trigger } from '@angular/animations';

export const CAROUSEL_ANIMATION = [
  trigger('visibility', [
    state('hidden-left', style({transform: 'translateX(100%)'})),
    state('hidden-right', style({transform: 'translateX(-100%)'})),

    transition('void => visible-right', []),
    transition('visible-right => visible-right', []),
    transition('* => visible-right', [
      style({transform: 'translateX(-100%)'}),
      animate('{{speed}}ms', style({transform: 'translateX(0%)'}))
    ], {params: {speed: '300'}}),
    transition('* => visible-left', [
      style({transform: 'translateX(100%)'}),
      animate('{{speed}}ms', style({transform: 'translateX(0%)'}))
    ], {params: {speed: '300'}}),

    transition('* => hidden-left', [
      animate('{{speed}}ms', style({transform: 'translateX(-100%)'}))
    ], {params: {speed: '300'}}),
    transition('* => hidden-right', [
      animate('{{speed}}ms', style({transform: 'translateX(100%)'}))
    ], {params: {speed: '300'}})
  ])
];
