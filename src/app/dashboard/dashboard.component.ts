import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router,
  ) {} 
  logOut(): void {
    this.socialAuthService.signOut();
    this.router.navigate(['login']);
  }

  perio(): void{
    this.router.navigate(['perio']);
  }
}
