import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  products!: Product[];
  product!: Product;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products =>{
      this.products = products
      console.log(products)
    })
  }

  

}
