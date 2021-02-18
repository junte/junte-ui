import { AnimationKeyframesSequenceMetadata, keyframes, style } from '@angular/animations';

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
