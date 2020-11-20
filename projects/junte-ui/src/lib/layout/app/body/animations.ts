import {
  animate,
  animateChild,
  AnimationKeyframesSequenceMetadata,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';

export const sharedStyles = {
  position: 'fixed',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  transformStyle: 'preserve-3d',
};

export const moveFromRightKeyframes: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({transform: 'translateX(100%)', offset: 0, 'z-index': '10'}),
    style({transform: 'translateX(0%)', offset: 1})
  ]);

export const moveToLeftKeyframes: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({transform: 'translateX(0%)', offset: 0}),
    style({transform: 'translateX(-100%)', opacity: '0', offset: 1})
  ]);

export const moveFromRight =
  trigger('routeAnimations', [transition('* => *', [
    query(':enter, :leave', style(sharedStyles), {optional: true}),
    query(':leave', animateChild()),
    group([
      query(':enter', [
        animate('{{enterTiming}}s {{enterDelay}}s ease', moveFromRightKeyframes)
      ], {optional: true}),
      query(':leave', [
        animate('{{leaveTiming}}s {{leaveDelay}}s ease', moveToLeftKeyframes)
      ], {optional: true}),
    ]),
    query(':enter', animateChild()),
  ], {params: {enterTiming: '18', leaveTiming: '18', enterDelay: '0', leaveDelay: '0'}})
  ]);
