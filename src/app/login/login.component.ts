import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss'
  ],

})
export class LoginComponent {

  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  user!: SocialUser;
  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private router: Router,
  ) {}  
  ngOnInit() {
    this.isLoggedin = false;
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
      this.user = user;
      if (this.user) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
  loginWithGoogle(): void {
    console.log("loginwith google executed🧧");
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then((result) => {
      // Handle successful sign-in here
      console.log("User signed in:", result);
      this.router.navigate(['dashboard']);
    })
    .catch((error) => {
      // Handle errors or failed sign-in here
      console.error("Sign-in failed:", error);
    });
    
    
  }
  logOut(): void {
    this.socialAuthService.signOut();
  }
}
