import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsComponent } from 'src/app/views/products/products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) { }

    showMessage(msg: string):void{
      this.snackBar.open(msg, '',{
        duration: 2500,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: ['snack-bar-green']
      })
    }

    openDialog(): void{
      const dialogRef = this.dialog.open(ProductsComponent, {
        width: '250px'
      })
    }

}
