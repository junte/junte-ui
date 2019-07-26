import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IsEqualPipe } from './is-equal.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [IsEqualPipe],
  declarations: [IsEqualPipe]
})
export class IsEqualModule {
}
