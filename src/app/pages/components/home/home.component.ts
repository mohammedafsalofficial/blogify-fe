import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { FeaturedPostsComponent } from "./featured-posts/featured-posts.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FeaturedPostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
