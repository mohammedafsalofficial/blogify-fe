import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogcardComponent } from '../../../../shared/components/blogcard/blogcard.component';
import { SvgArrowRightComponent } from "../../../../shared/components/svg-arrow-right/svg-arrow-right.component";

@Component({
  selector: 'app-featured-posts',
  imports: [RouterLink, BlogcardComponent, SvgArrowRightComponent],
  templateUrl: './featured-posts.component.html',
  styleUrl: './featured-posts.component.css',
})
export class FeaturedPostsComponent {
  featuredPosts = [
    {
      id: 1,
      title: 'Building Modern UIs with React and Tailwind',
      excerpt:
        "Learn how to combine React's component model with Tailwind's utility classes for rapid UI development.",
      category: 'Frontend',
      readTime: '8 min read',
      imageUrl: '/blog-1.jpg',
    },
    {
      id: 2,
      title: 'GraphQL vs REST: Choosing the Right API Architecture',
      excerpt:
        'Explore the key differences and use cases for GraphQL and REST APIs in modern applications.',
      category: 'Backend',
      readTime: '12 min read',
      imageUrl: '/blog-2.jpg',
    },
    {
      id: 3,
      title: 'Building a CI/CD Pipeline with GitHub Actions',
      excerpt:
        'A step-by-step guide to automating your deployment workflow with GitHub Actions.',
      category: 'DevOps',
      readTime: '10 min read',
      imageUrl: '/blog-3.jpg',
    },
  ];
}
