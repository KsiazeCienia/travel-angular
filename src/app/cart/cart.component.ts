import { Component, OnInit, Input } from '@angular/core';
import { Tour } from 'src/app/tour';
import { CartService } from '../cart.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalPrice: number;
  totalReservation: number;

  private service: CartService;

  constructor(service: CartService) {
    this.service = service;
  }

  ngOnInit() { 
    this.totalPrice = this.service.getTotalPrice();
    this.totalReservation = this.service.getNumberOfTours();
  }

  getTotalPrice() {
    return this.service.getTotalPrice();
  }
}
