/**
 * Every route in this routing module is a child route
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {
    // path is empty here becuase /orders is already set in AppRoutingModule which makes this
    // routes already within the context of OrdersRoutingModule
    path: '',
    component: OrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
