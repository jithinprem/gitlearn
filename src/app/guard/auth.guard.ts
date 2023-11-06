// import { SocialAuthService } from '@abacritt/angularx-social-login';
// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   const socialAuthService: SocialAuthService = inject(SocialAuthService);
//   const router: Router = inject(Router);
//     socialAuthService.authState.subscribe((user) => {
//     return (user != null);
//   });
//   router.navigate(['/login']);
//   return false;
// };
import { SocialAuthService } from '@abacritt/angularx-social-login';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, map, tap} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  user : any;
  constructor(private socialAuthService: SocialAuthService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
    return this.socialAuthService.authState.pipe(
      map(user => {
        if (user != null) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  
     
  }
}