import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { ToolbarTopComponent } from './public/toolbar-top/toolbar-top.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { ToolbarLeftSellerComponent } from './seller/component/toolbar-left-seller/toolbar-left-seller.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import { ToolbarLeftCustomerComponent } from './customer/component/toolbar-left-customer/toolbar-left-customer.component';
import { PostsComponent } from './seller/pages/posts/posts.component';
import { CardPreviewPostComponent } from './seller/component/card-preview-post/card-preview-post.component';
import { AddEditFormPostComponent } from './seller/component/add-edit-form-post/add-edit-form-post.component';
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddPostsComponent } from './seller/pages/add-posts/add-posts.component';
import { AdditionalDataProfileSellerComponent } from './seller/pages/additional-data-profile-seller/additional-data-profile-seller.component';
import { SalesHistoryComponent } from './seller/pages/sales-history/sales-history.component';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import {MatCardModule} from "@angular/material/card";
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './security/pages/forgot-password/forgot-password.component';
import { HomeComponent } from './public/home/home.component';
import { SearchComponentsComponent } from './customer/pages/search-components/search-components.component';
import { ComponentInformationComponent } from './customer/pages/component-information/component-information.component';
import { AdvancedFilterComponent } from './customer/pages/advanced-filter/advanced-filter.component';
import { MyFavoritesComponent } from './customer/pages/my-favorites/my-favorites.component';
import { ShoppingCartComponent } from './customer/pages/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarTopComponent,
    ToolbarLeftSellerComponent,
    ToolbarLeftCustomerComponent,
    PostsComponent,
    CardPreviewPostComponent,
    AddEditFormPostComponent,
    AddPostsComponent,
    AdditionalDataProfileSellerComponent,
    SalesHistoryComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    HomeComponent,
    SearchComponentsComponent,
    ComponentInformationComponent,
    AdvancedFilterComponent,
    MyFavoritesComponent,
    ShoppingCartComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
