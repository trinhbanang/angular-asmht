import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './hello.component';
import { AdminComponent } from './backend/admin/admin.component';
import { HomeComponent } from './fronend/home/home.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProductManagerComponent } from './backend/product-manager/product-manager.component';
import { ShopComponent } from './fronend/shop/shop.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, AdminComponent, HomeComponent, DashboardComponent, ProductManagerComponent, ShopComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
