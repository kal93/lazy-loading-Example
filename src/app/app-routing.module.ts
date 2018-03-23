/** Configure the routes for the feature modules in this file
 * Feature modules here are the customers.module & orders.module
 * Reference: https://angular.io/guide/lazy-loading-ngmodules
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // load customers module
  {
    path: 'customers',
    loadChildren: 'app/customers/customers.module#CustomersModule'
  },
  // loads orders modules
  {
    path: 'orders',
    // lazy loading sytax i.e loadChildren followed by string path,# & module's class name
    loadChildren: 'app/orders/orders.module#OrdersModule'
  },
  // default route
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
