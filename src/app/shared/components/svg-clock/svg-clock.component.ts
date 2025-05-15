import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-clock',
  imports: [],
  templateUrl: './svg-clock.component.html',
  styleUrl: './svg-clock.component.css',
})
export class SvgClockComponent {
  @Input() class: string = '';
}
