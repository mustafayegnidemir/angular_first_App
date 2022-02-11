import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './admin/products/products.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { PriceListComponent } from './admin/price-list/price-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    CategoriesComponent,
    PriceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
