import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ProductsComponent } from './views/products/products.component';
import { ForDirective } from './directives/for.directive';
import { ProductsCreateComponent } from './components/product/products-create/products-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    ForDirective,
    ProductsCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
