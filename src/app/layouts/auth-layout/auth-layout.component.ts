import { Component } from '@angular/core';
import { AuthComponent } from "../../pages/components/auth/auth.component";

@Component({
  selector: 'app-auth-layout',
  imports: [AuthComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {}
