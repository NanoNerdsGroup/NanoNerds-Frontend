import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ToolbarLeftSellerComponent} from "./seller/component/toolbar-left-seller/toolbar-left-seller.component";
import {ToolbarLeftCustomerComponent} from "./customer/component/toolbar-left-customer/toolbar-left-customer.component";
import {SignInComponent} from "./security/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./security/pages/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "./security/pages/forgot-password/forgot-password.component";
import {HomeComponent} from "./public/home/home.component";
import {SearchComponentsComponent} from "./customer/pages/search-components/search-components.component";
import {PostsComponent} from "./seller/pages/posts/posts.component";
import {AddPostsComponent} from "./seller/pages/add-posts/add-posts.component";
import {ComponentInformationComponent} from "./customer/pages/component-information/component-information.component";
import {AdvancedFilterComponent} from "./customer/pages/advanced-filter/advanced-filter.component";

const routes: Routes = [
  { path : 'home', component : HomeComponent },

  { path : 'sign-in', component : SignInComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path : 'sign-up', component : SignUpComponent },
  { path : 'forgot-password', component : ForgotPasswordComponent },
  {path:'search-components',component:SearchComponentsComponent},

  { path: 'toolbar-left-seller', component: ToolbarLeftSellerComponent },

  {path:'post',component:PostsComponent},
  {path:'add-post',component:AddPostsComponent},
  {path: 'component-information/:id', component: ComponentInformationComponent,},
  {path:'advance-filter',component:AdvancedFilterComponent},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
