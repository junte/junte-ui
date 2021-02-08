import { Component } from '@angular/core';
import { Benchmark } from 'src/components/handbook/shared/benchmark/benchmark';

@Component({
  selector: 'app-button-benchmark',
  templateUrl: './button-benchmark.component.html',
  styleUrls: ['./button-benchmark.component.scss']
})
export class ButtonBenchmarkComponent extends Benchmark {
  name = 'Button benchmark';
}
