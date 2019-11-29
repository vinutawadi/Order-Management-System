import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingService } from '../../services/shoppingList.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit, OnDestroy {
  public shoppingCartItems = [];
  private _subscription: Subscription;

  constructor(private cartService: ShoppingService) {
  }
  ngOnInit() {
    this._subscription = this.cartService.modalAction$.subscribe(res => {
      this.shoppingCartItems = [];
      this.shoppingCartItems = res;
      localStorage.setItem('shoppingCartDetails', JSON.stringify(this.shoppingCartItems));
    });
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
