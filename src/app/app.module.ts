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

@NgModule({
  declarations: [
    AppComponent,
    ToolbarTopComponent,
    ToolbarLeftSellerComponent,
    ToolbarLeftCustomerComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
