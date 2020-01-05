import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";
import { MyUser } from '../user';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})

export class TopMenuComponent implements OnInit {

  private authService: AuthService
  private router: Router
  user: MyUser
  isUserAdmin: boolean

  constructor(authService: AuthService, router: Router) {
    this.authService = authService
    this.router = router
  } 

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
