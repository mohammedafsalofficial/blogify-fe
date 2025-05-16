import { Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { BlogsComponent } from './pages/components/blogs/blogs.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SignupPageComponent } from './pages/components/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/components/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'blogs', component: BlogsComponent },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'signup', component: SignupPageComponent },
      { path: '**', redirectTo: 'login' },
    ],
  },
];
