import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss']
})
export class ProductsCreateComponent implements OnInit {

  constructor(private productService: ProductService,
      private router: Router) { }

  ngOnInit(): void {
  }
  createProduct():void{
    this.productService.showMessage('Produto Criado!')
  }
  cancel():void{
    this.router.navigate(['/products'])
  }

}
