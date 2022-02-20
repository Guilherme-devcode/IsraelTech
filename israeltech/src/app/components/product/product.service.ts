import { Product } from './product.model';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { ProductsComponent } from 'src/app/views/products/products.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

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

    read(): Observable<Product[]>{

      return this.http.get<Product[]>(this.baseUrl)
    }
    readById(id: string): Observable<Product>{
      const url = `${this.baseUrl}/${id}`
      return this.http.get<Product>(url)
    }
    update(product: Product): Observable<Product>{
      const url = `${this.baseUrl}/${product.id}`
      return this.http.put<Product>(url, product)
    }
    
    delete(id:string):Observable<Product>{
      const url = `${this.baseUrl}/${id}`
      return this.http.delete<Product>(url)
    }
}
