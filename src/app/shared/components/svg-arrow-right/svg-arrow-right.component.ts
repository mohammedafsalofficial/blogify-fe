import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-arrow-right',
  imports: [],
  templateUrl: './svg-arrow-right.component.html',
  styleUrl: './svg-arrow-right.component.css',
})
export class SvgArrowRightComponent {
  @Input() class: string = '';
}
