import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-form-dialog',
  templateUrl: './products-form-dialog.component.html',
  styleUrls: ['./products-form-dialog.component.scss']
})
export class ProductsFormDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductsFormDialogComponent>
  ) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.dialogRef.close();
  }

}
