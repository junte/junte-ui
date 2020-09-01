import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { MethodApi, PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';

type Counter = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}

export const SECONDS_IN_MINUTE = 60;
export const SECONDS_IN_HOUR = 3600;
export const HOURS_IN_DAY = 24;

@Component({
  selector: 'jnt-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  ui = UI;
  remains = 0;
  timer: any;
  counter: Counter = {days: 0, hours: 0, minutes: 0, seconds: 0};

  private days$ = new BehaviorSubject<number>(0);
  private hours$ = new BehaviorSubject<number>(0);
  private minutes$ = new BehaviorSubject<number>(0);
  private seconds$ = new BehaviorSubject<number>(0);

  @HostBinding('attr.host') readonly host = 'jnt-timer-host';

  @PropertyApi({
    description: 'Days count',
    type: 'number',
  })
  @Input() set days(days: number) {
    this.days$.next(days);
  }

  get days() {
    return this.days$.getValue();
  }

  @PropertyApi({
    description: 'Hours count',
    type: 'number',
  })
  @Input() set hours(hours: number) {
    this.hours$.next(hours);
  }

  get hours() {
    return this.hours$.getValue();
  }

  @PropertyApi({
    description: 'Minutes count',
    type: 'number',
  })
  @Input() set minutes(minutes: number) {
    this.minutes$.next(minutes);
  }

  get minutes() {
    return this.minutes$.getValue();
  }

  @PropertyApi({
    description: 'Seconds count',
    type: 'number',
  })
  @Input() set seconds(seconds: number) {
    this.seconds$.next(seconds);
  }

  get seconds() {
    return this.seconds$.getValue();
  }

  @Output() tick = new EventEmitter<any>();
  @Output() finished = new EventEmitter<any>();

  @MethodApi({description: 'Pause timer'})
  pause() {
    clearInterval(this.timer);
    this.timer = null;
  }

  @MethodApi({description: 'Reset timer'})
  reset() {
    this.remains = this.days * SECONDS_IN_HOUR * HOURS_IN_DAY + this.hours * SECONDS_IN_HOUR + this.minutes * SECONDS_IN_MINUTE + this.seconds;
    this.start();
  }

  ngOnInit() {
    combineLatest([this.days$, this.hours$, this.minutes$, this.seconds$])
      .subscribe(() => {
        this.remains = this.days * SECONDS_IN_HOUR * HOURS_IN_DAY + this.hours * SECONDS_IN_HOUR + this.minutes * SECONDS_IN_MINUTE + this.seconds;
        this.start();
      });
  }

  start() {
    if (!!this.timer) {
      return;
    }

    this.pause();
    this.timer = setInterval(() => {
      if (this.remains >= 0) {
        this.counter.days = Math.floor((this.remains / SECONDS_IN_HOUR) / HOURS_IN_DAY);
        this.counter.hours = Math.floor((this.remains / SECONDS_IN_HOUR) % HOURS_IN_DAY);
        this.counter.minutes = Math.floor((this.remains / SECONDS_IN_MINUTE) % SECONDS_IN_MINUTE);
        this.counter.seconds = Math.floor(this.remains % SECONDS_IN_MINUTE);
        this.remains--;
      } else {
        this.pause();
        this.finished.emit();
      }
    }, 1000);
  }


}
