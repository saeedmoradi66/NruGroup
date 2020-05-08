import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `<div *ngIf="show">
    <mat-progress-bar mode="query"></mat-progress-bar>
  </div> `,
})
export class SpinnerComponent {
  @Input() show: boolean;
}
