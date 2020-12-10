import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { moveFromRightKeyframes, moveToLeftKeyframes } from './keyframes';
import { noneAnimation, sharedStyles } from './shared';

export const moveFromRight = trigger('moveFromRight', [
  ...noneAnimation,
  transition('* => *', [
    query(':enter, :leave', style(sharedStyles), {optional: true}),
    group([
      query(':enter', [
        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromRightKeyframes)
      ], {optional: true}),
      query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', moveToLeftKeyframes)
      ], {optional: true}),
    ]),
    query(':enter, :leave', animateChild(), {optional: true}),
  ], {params: {enterTiming: '10', leaveTiming: '10', enterDelay: '0', leaveDelay: '0'}})
]);
