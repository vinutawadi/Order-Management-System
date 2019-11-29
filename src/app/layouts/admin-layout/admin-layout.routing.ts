import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashbaord/dashboard.component';
import { HomeComponent } from '../../home/home.component';
import { ItemDetailsComponent } from '../../item-details/item-details.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'orders',      component: DashboardComponent },
    { path: 'homePage',      component: HomeComponent },
    { path: 'product-details/:id', component: ItemDetailsComponent }
]


