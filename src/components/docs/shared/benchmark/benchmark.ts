import { AfterViewInit } from '@angular/core';

export class Benchmark implements AfterViewInit {
  name = '';
  start = new Date();
  end: Date;

  ngAfterViewInit() {
    this.end = new Date();
    console.log(`${this.name || 'Some component'} rendering:`, this.end.getTime() - this.start.getTime());
  }
}
