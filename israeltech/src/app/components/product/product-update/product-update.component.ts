import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  product!: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(product =>{
      this.product = product
    })
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

  cancel():void{
    this.router.navigate(['/products'])
  }
  updateProduct():void{
    this.productService.update(this.product).subscribe(()=>{
      this.productService.showMessage('Produto Alterado')
      this.router.navigate(['/products'])
    })
  }

}
