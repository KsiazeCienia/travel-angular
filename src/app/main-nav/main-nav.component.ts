import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MyUser } from '../user';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  user: MyUser
  isUserAdmin: boolean
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private authService: AuthService, 
    private router: Router, 
    private breakpointObserver: BreakpointObserver) {} 

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.user = user
      this.isUserAdmin = this.authService.isAdmin(this.user)
    })
  }

  logOut() {
    this.authService.logout()
      .then(val => this.router.navigate(['/login']))
  }
}
