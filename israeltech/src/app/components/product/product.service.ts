import { Product } from './product.model';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { ProductsComponent } from 'src/app/views/products/products.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string):void{
      this.snackBar.open(msg, '',{
        duration: 2500,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: ['snack-bar-green']
      })
    }

    create(product: Product): Observable<Product>{
      return this.http.post<Product>(this.baseUrl, product)
    }
}
