import { ProductsCreateComponent } from './components/product/products-create/products-create.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/products-delete/products-delete.component';
import { AcessoComponent } from './acesso/acesso.component';
import { AutenticacaoGuard } from './autenticacao-guard.service';

export const ROUTES: Routes = [
    {path: '', component: AcessoComponent},
    {path: 'home', component:HomeComponent, canActivate:[AutenticacaoGuard]},
    {path: 'products',component:ProductsComponent, canActivate:[AutenticacaoGuard]},
    {path: 'products/create', component:ProductsCreateComponent, canActivate:[AutenticacaoGuard]},
    {path: 'products/update/:id', component:ProductUpdateComponent, canActivate:[AutenticacaoGuard]},
    { path: "products/delete/:id", component: ProductDeleteComponent, canActivate:[AutenticacaoGuard]}
]