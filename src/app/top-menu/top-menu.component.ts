import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})

export class TopMenuComponent implements OnInit {

  private authService: AuthService
  private router: Router

  constructor(authService: AuthService, router: Router) {
    this.authService = authService
    this.router = router
  } 

  ngOnInit() {
  }

  logOut() {
    this.authService.logout()
    .then(val => this.router.navigate(['/login']))
  }
}
