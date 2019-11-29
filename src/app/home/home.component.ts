import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shoppingList.service';
import { AllPhoneList } from '../services/data.module';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allPhoneList: AllPhoneList;

  public shoppingCartItems$: Observable<AllPhoneList[]> = of([]);
  public shoppingCartItems: AllPhoneList[] = [];

  constructor(public shoppingService: ShoppingService, public router: Router) { }

  ngOnInit() {
    this.shoppingService.getAllPhoneList()
      .subscribe((data: AllPhoneList) => {
        this.allPhoneList = data;
      }
      );
  }
  gotoProductDetails(data: any): void {
    localStorage.setItem('productDetails', JSON.stringify(data));
    this.router.navigateByUrl('/product-details/' + data.title);

  }
}



