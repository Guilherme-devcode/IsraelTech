import { ProductService } from './../../components/product/product.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  constructor(
    private router: Router,
    private productService: ProductService
     ) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void{
    this.router.navigate(['./products/create'])
  }
  createProduct():void{
    this.productService.showMessage('Produto Criado!')
  }


}
