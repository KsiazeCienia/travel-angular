import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.authService.user$.pipe(map(user => { 
        if (!user) { 
          this.router.navigate(['/login']); 
          return false
         }

        if (user.role['admin']) {
          return true
        }
        
        this.router.navigate(['/tours']); 
        return false
      })
    );
  } 
}
