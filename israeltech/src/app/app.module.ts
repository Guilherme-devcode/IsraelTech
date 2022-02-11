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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ProductReadComponent } from './components/product/product-read/product-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    ForDirective,
    ProductsCreateComponent,
    ProductReadComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
