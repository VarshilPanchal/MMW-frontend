import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './display/header/header.component';
import { HomeComponent } from './display/home/home.component';
import { ProductComponent } from './forms/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { AboutUsComponent } from './display/about-us/about-us.component';
import { ContactUsComponent } from './display/contact-us/contact-us.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "product", component: ProductComponent },
  { path: "product/edit/:id", component: ProductComponent },

  { path: "product/list", component: ProductListComponent },
  { path: "product/list/:id", component: ProductDetailComponent },

  { path: "aboutus", component: AboutUsComponent },

  { path: "contactus", component: ContactUsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
