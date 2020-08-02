import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './display/home/home.component';
import { HeaderComponent } from './display/header/header.component';
import { FooterComponent } from './display/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ProductComponent } from './forms/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AboutUsComponent } from './display/about-us/about-us.component';
import { ContactUsComponent } from './display/contact-us/contact-us.component';
import { CategoriesComponent } from './display/home/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    TruncatePipe,
    AboutUsComponent,
    ContactUsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
