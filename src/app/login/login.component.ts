import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shoppingList.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 loginDetailsData: any;
 data: any;
 wrongDetails = '';
  constructor(  private cartService: ShoppingService,
    private router: Router) { }

  ngOnInit() {
    this.cartService.getloginDetails()
    .subscribe((data) => {
      this.loginDetailsData = data;
      console.log(this.loginDetailsData, 'allphone list');

    }
    );
  }

  loginDetails(form){
    this.loginDetailsData.forEach(element => {
      this.data = element;
    });
    if (form.value.login_name === this.data.login_name && form.value.password === this.data.password) {
    this.router.navigateByUrl('/homePage');
    } else {
      this.wrongDetails = 'Please enter the valid login details';
    }
  }

}
