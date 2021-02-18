import { transition } from '@angular/animations';

export const sharedStyles = {
  position: 'fixed',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  transformStyle: 'preserve-3d',
};

export const noneAnimation = [
  transition('void => *', [
    //denies any animation for init state
  ]),
  transition('false => *', [
    //denies any animation from 'false' state
  ]),
  transition('* => false', [
    //denies any animation from 'false' state
  ]),
];
