import { animate, state, style, transition, trigger } from '@angular/animations';

export const CAROUSEL_ANIMATION = [
  trigger('visibility', [
    state('hidden-left', style({transform: 'translateX(100%)'})),
    state('hidden-right', style({transform: 'translateX(-100%)'})),

    transition('void => visible-left', [
      style({transform: 'translateX(0%)'})
    ]),
    transition('void => visible-right', [
      style({transform: 'translateX(0%)'})
    ]),
    transition('void => hidden-left', [
      style({transform: 'translateX(100%)'})
    ]),
    transition('void => hidden-right', [
      style({transform: 'translateX(-100%)'})
    ]),

    transition('hidden-left => visible-right', [
      style({transform: 'translateX(-100%)'}),
      animate('{{speed}}ms ease', style({transform: 'translateX(0%)'}))
    ], {params: {speed: '300'}}),
    transition('hidden-right => visible-right', [
      style({transform: 'translateX(-100%)'}),
      animate('{{speed}}ms ease', style({transform: 'translateX(0%)'}))
    ], {params: {speed: '300'}}),
    transition('hidden-left => visible-left', [
      style({transform: 'translateX(100%)'}),
      animate('{{speed}}ms ease', style({transform: 'translateX(0%)'}))
    ], {params: {speed: '300'}}),
    transition('hidden-right => visible-left', [
      style({transform: 'translateX(100%)'}),
      animate('{{speed}}ms ease', style({transform: 'translateX(0%)'}))
    ], {params: {speed: '300'}}),

    transition('* => hidden-left', [
      animate('{{speed}}ms ease', style({transform: 'translateX(-100%)'}))
    ], {params: {speed: '300'}}),
    transition('* => hidden-right', [
      animate('{{speed}}ms ease', style({transform: 'translateX(100%)'}))
    ], {params: {speed: '300'}})
  ])
];
