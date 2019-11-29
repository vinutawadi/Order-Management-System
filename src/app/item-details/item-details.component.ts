import { Component, OnInit } from '@angular/core';
import { AllPhoneList } from '../services/data.module'
import { ShoppingService } from '../services/shoppingList.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  getData: any;
  public shoppingCartItems: Array<any>;
  public totalData = [];
  public mergeData = [];
  constructor(public cartService: ShoppingService) {
    this.shoppingCartItems = [];
  }

  ngOnInit() {
    this.getData = JSON.parse(localStorage.getItem('productDetails'));
  }

  addToCart(product: AllPhoneList) {
    this.mergeData = [];
    this.totalData = [];
    let data = JSON.parse(localStorage.getItem('storeshoppingCartDetails'));
    if(data === null) {
      data = [];
      this.shoppingCartItems.push(product);
      localStorage.setItem('storeshoppingCartDetails', JSON.stringify(this.shoppingCartItems));
      this.cartService.addToCart(this.shoppingCartItems);
    } else {
      this.mergeData.push(product);
      this.totalData = data;
      this.shoppingCartItems = [...this.totalData, ...this.mergeData]
      localStorage.setItem('storeshoppingCartDetails', JSON.stringify(this.shoppingCartItems));
      console.log(this.shoppingCartItems,'gfgfgfg')
      this.cartService.addToCart(this.shoppingCartItems);
    }
    
  }
}
