/**
 * Every route in this routing module is a child route
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersListComponent } from './customers-list/customers-list.component';

const routes: Routes = [
  {
    // path is empty here becuase /customers is already set in AppRoutingModule which makes this
    // routes already within the context of CustomersRoutingModule
    path: '',
    component: CustomersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
