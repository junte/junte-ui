import { animate, state, style, transition, trigger } from '@angular/animations';

export const MODAL_MOVE = trigger('move', [
  state(
    'hidden',
    style({
      top: '100%',
      left: '50%',
      transform: 'translate(-50%, 0)'
    })
  ),
  state(
    'visible',
      style({
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      })
    ),
    transition(
      'hidden => visible',
      [
        animate('.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)')
      ]
    ),
    transition(
      'visible => hidden',
      [
        animate('.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)')
      ]
    )
  ]
);

export const MODAL_BLACKOUT = trigger('blackout', [
  state(
    'void',
    style({
      opacity: 0
    })
  ),
  state(
    '*',
    style({
      opacity: 1
      })
    ),
    transition(
      'void <=> *',
      [
        animate('.5s ease-in-out')
      ]
    )
  ]
);
