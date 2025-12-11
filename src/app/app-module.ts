import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductList } from './components/product-list/product-list';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product-service';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryService } from './services/product-category-service';
import { ProductCategories } from './components/product-categories/product-categories';
import { Search } from './components/search/search';


const routes: Routes = [
    {path: 'search/:keyword', component: ProductList},
    {path: 'category/:id', component: ProductList},
    {path: 'category', component: ProductList},
    {path: 'products', component: ProductList},
    {path: '', redirectTo: '/products', pathMatch: 'full'},
    {path: '**', redirectTo: '/products', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    App,
    ProductList,
    ProductCategories,
    Search
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ProductService,
    ProductCategoryService
  ],
  bootstrap: [App]
})
export class AppModule { }
