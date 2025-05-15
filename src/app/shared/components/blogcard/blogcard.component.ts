import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgArrowRightComponent } from "../svg-arrow-right/svg-arrow-right.component";
import { SvgClockComponent } from "../svg-clock/svg-clock.component";

interface Blogcard {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

@Component({
  selector: 'app-blogcard',
  imports: [RouterLink, SvgArrowRightComponent, SvgClockComponent],
  templateUrl: './blogcard.component.html',
  styleUrl: './blogcard.component.css',
})
export class BlogcardComponent {
  @Input() cardData!: Blogcard;
}
