import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from '../product.model';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';


export interface Tag {
  name: string;
}
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
  product: Product = {
    name: '',
    description: '',
    categories: '',
    price: null,
    imagem: null,
    date: '',

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


  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  
  tags: Tag[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();


    // Add our fruit
    if (value) {
      this.tags.push({name: value});
      
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  
}
