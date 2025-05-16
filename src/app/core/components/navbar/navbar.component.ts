import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, startWith } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  navLinks = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Blogs', path: '/blogs' },
    { id: 3, label: 'Categories', path: '/catergories' },
    { id: 4, label: 'About', path: '/about' },
    { id: 5, label: 'Contact', path: '/contact' },
  ];

  currentRoute: string = '';

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        startWith(this.route)
      )
      .subscribe((event) => {
        this.currentRoute = event.url;
      });
  }
}
