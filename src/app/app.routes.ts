import { Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { BlogsComponent } from './pages/components/blogs/blogs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogs', component: BlogsComponent },
];
