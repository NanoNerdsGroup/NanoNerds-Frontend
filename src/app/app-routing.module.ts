import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ToolbarLeftSellerComponent} from "./seller/component/toolbar-left-seller/toolbar-left-seller.component";
import {ToolbarLeftCustomerComponent} from "./customer/component/toolbar-left-customer/toolbar-left-customer.component";
import {SignInComponent} from "./security/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./security/pages/sign-up/sign-up.component";

const routes: Routes = [

  { path : 'sign-in', component : SignInComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path : 'sign-up', component : SignUpComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
