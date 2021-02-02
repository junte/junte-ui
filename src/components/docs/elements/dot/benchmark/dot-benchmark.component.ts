import { Component } from '@angular/core';
import { Benchmark } from 'src/components/docs/shared/benchmark/benchmark';

@Component({
  selector: 'app-dot-benchmark',
  templateUrl: './dot-benchmark.component.html',
  styleUrls: ['./dot-benchmark.component.scss']
})
export class DotBenchmarkComponent extends Benchmark {
  name = 'Button benchmark';
}
