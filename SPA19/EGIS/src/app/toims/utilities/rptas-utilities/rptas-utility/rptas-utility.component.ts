import { Component, OnInit, ViewChild } from '@angular/core';
import { IPayment } from '../../../../rptfaass/models/payment';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
// Update the import path below to the correct relative path based on your project structure
import { PaymentService } from '../../../../rptfaass/services/payment.service';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { endWith, startWith } from 'rxjs';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UtilityrptasService } from '../../../services/utilityrptas.service';
import { RptasUtilityPopupComponent } from './rptas-utility-popup.component';

@Component({
  selector: 'app-rptas-utility',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  templateUrl: './rptas-utility.component.html',
  styleUrl: './rptas-utility.component.css'
})
export class RptasUtilityComponent implements OnInit {

rangeForm = new FormGroup({
  type: new FormControl('total'),
    startingRange: new FormControl(''),
    endingRange: new FormControl('')
  });

selection = new SelectionModel<IPayment>(true, []); 
  
displayedColumns: string[] = ['select','actions','receiptNo', 'paymentMethod' ,'paymentDate', 'amountPaid'];

dataSource!: MatTableDataSource<IPayment>;

@ViewChild(MatPaginator) paginator!:MatPaginator;
@ViewChild(MatSort) sort!:MatSort;
@ViewChild(MatTable) table!:MatTable<IPayment>;

  constructor(private dialog: MatDialog,
    private utilityrptasService: UtilityrptasService){
  }
  ngOnInit(): void {
    this.loadUtility();
  }

  loadUtility(): void{
    this.utilityrptasService.getAllPayments().subscribe((mcodes) =>
      {   
          this.dataSource = new MatTableDataSource(mcodes);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      });
  }

  loadBatch(): void{
  const startWith = Number(this.rangeForm.get('startingRange')?.value);
  const endWith = Number(this.rangeForm.get('endingRange')?.value);

  if (isNaN(startWith) || isNaN(endWith)) {
    // Show error or return
    return;
  }
  
  this.utilityrptasService.getPaymentsByReceiptRange(startWith, endWith).subscribe((mcodes) =>
    {   
        this.dataSource = new MatTableDataSource(mcodes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });
  }

  isAllSelected(): boolean
  {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data.length || 0;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onProcess(row: any) {
    const dialogRef = this.dialog.open(RptasUtilityPopupComponent, {
      data: { message: 'Mark this payment as "For Collection"?' }
    });

    dialogRef.afterClosed().subscribe(result => {
    if (result) {
      row.status = 'For Collection';
      this.utilityrptasService.updatePayments(row).subscribe(() => {
        this.dataSource.data = [...this.dataSource.data];
      });
    }
    });
  }

  onBatchUpdate() {
    const selectedPayments = this.selection.selected;
    if (selectedPayments.length === 0) {
      alert('No payments selected for batch update.');
      return;
    }

    const dialogRef = this.dialog.open(RptasUtilityComponent, {
      data: { message: 'Mark selected payments as "For Collection"?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        selectedPayments.forEach(payment => payment.status = 'For Collection');
        this.utilityrptasService.batchUpdatePayments(selectedPayments).subscribe(() => {
          this.dataSource.data = [...this.dataSource.data];
          this.selection.clear();
        });
      }
    });
  }
  
  applyFilter(event:Event): void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}

