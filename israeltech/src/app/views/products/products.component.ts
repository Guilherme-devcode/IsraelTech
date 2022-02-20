import { Product } from './../../components/product/product.model';
import { ProductService } from './../../components/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})

export class ProductsComponent implements OnInit {


  product: Product = {
    name: '',
    description: '',
    categories: '',
    price: null,
    imagem: null,
    date: '',
  }

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {

  }
    
  files: File[] = [];

	onSelect(event :any) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event : any) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  navigateToProductCreate(): void {
    this.router.navigate(['./products/create'])
  }
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado!')
      window.location.reload();
    })
  }

}
