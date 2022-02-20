import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';
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
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/products-delete/products-delete.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './acesso/banner/banner.component';
import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { AutenticacaoGuard } from './autenticacao-guard.service';
import { Autenticacao } from './acesso/autenticacao.service';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

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
    ProductUpdateComponent,
    ProductDeleteComponent,
    AcessoComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatMenuModule,
    MatCardModule,
    RouterModule.forRoot(ROUTES),
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [Autenticacao, AutenticacaoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
