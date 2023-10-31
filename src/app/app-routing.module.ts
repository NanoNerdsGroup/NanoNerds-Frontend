import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ToolbarLeftSellerComponent} from "./seller/component/toolbar-left-seller/toolbar-left-seller.component";
import {ToolbarLeftCustomerComponent} from "./customer/component/toolbar-left-customer/toolbar-left-customer.component";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
