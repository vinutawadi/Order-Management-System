import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shoppingList.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private cartService: ShoppingService,
    private router: Router) {
  }
  private _subscription: Subscription;
  public shoppingCartItems = [];
  profiledetails: any;
  deleteOrder = false;
  orderDetails: any;
  ngOnInit() {
    this.cartService.getProfileDetails()
      .subscribe((data) => {
        this.profiledetails = data;
        console.log(this.profiledetails, 'allphone list');

      }
      );
    this.getShoppingCart();
  }
  getShoppingCart() {
    this.shoppingCartItems = JSON.parse(localStorage.getItem('shoppingCartDetails'));
  }
  remove(data) {
    this.orderDetails = data;
    if (this.deleteOrder === true) {
      const index: number = this.shoppingCartItems.indexOf(data);
      if (index !== -1) {
        this.shoppingCartItems.splice(index, 1);
        this.deleteOrder = false;
        localStorage.setItem('shoppingCartDetails', JSON.stringify(this.shoppingCartItems));
      }
      if (this.shoppingCartItems.length === 0) {
        localStorage.clear();
      }
      this.cartService.addToCart(this.shoppingCartItems);
      localStorage.setItem('storeshoppingCartDetails', JSON.stringify(this.shoppingCartItems));

    }
  }
  saveChanges(value) {
    if (value === 'save') {
      this.deleteOrder = true;
      this.remove(this.orderDetails);
    } else {
      this.deleteOrder = false;
    }
  }
  saveChangesEdit(data) {
    console.log(data, 'data')
    this.cartService.editProfileDetails(data.id, data)
      .subscribe((data) => {
        this.profiledetails = data;
      }
      );
  }
}
