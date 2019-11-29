import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashbaord/dashboard.component';
import { HomeComponent } from '../../home/home.component';
import { ItemDetailsComponent } from '../../item-details/item-details.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
    ItemDetailsComponent,
  ]
})

export class AdminLayoutModule {}
