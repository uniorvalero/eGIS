import { Component, OnInit, ViewChild } from '@angular/core';
import { IBPLTASPayment } from '../../../../bpltas/models/bpltaspayment';
import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { UtilityrptasService } from '../../../services/utilityrptas.service';
import { RptasUtilityPopupComponent } from '../../rptas-utilities/rptas-utility/rptas-utility-popup.component';
import { RptasUtilityComponent } from '../../rptas-utilities/rptas-utility/rptas-utility.component';
import { UtilitybpltasService } from '../../../services/utilitybpltas.service';

@Component({
  selector: 'app-bpltas-utility',
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
  templateUrl: './bpltas-utility.component.html',
  styleUrl: './bpltas-utility.component.css'
})
export class BpltasUtilityComponent implements OnInit {

rangeForm = new FormGroup({
  type: new FormControl('total'),
    startingRange: new FormControl(''),
    endingRange: new FormControl('')
  });

selection = new SelectionModel<IBPLTASPayment>(true, []); 
  
displayedColumns: string[] = ['select','actions','receiptNo', 'typesOfPayment' ,'paymentDate', 'amount'];

dataSource!: MatTableDataSource<IBPLTASPayment>;

@ViewChild(MatPaginator) paginator!:MatPaginator;
@ViewChild(MatSort) sort!:MatSort;
@ViewChild(MatTable) table!:MatTable<IBPLTASPayment>;

  constructor(private dialog: MatDialog,
    private utilitybpltasService: UtilitybpltasService){
  }
  ngOnInit(): void {
    this.loadUtility();
  }

  loadUtility(): void{
    this.utilitybpltasService.getAllPayments().subscribe((mcodes) =>
      {   
          this.dataSource = new MatTableDataSource(mcodes);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      });
  }

  loadBatch(): void{
  const startWith = Number(this.rangeForm.get('startingRange')?.value);
  const endWith = Number(this.rangeForm.get('endingRange')?.value);
  console.log("start" + startWith, "end" + endWith);

  if (isNaN(startWith) || isNaN(endWith)) {
    // Show error or return
    return;
  }
  
  this.utilitybpltasService.getPaymentsByReceiptRange(startWith, endWith).subscribe((mcodes) =>
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
      this.utilitybpltasService.updatePayments(row).subscribe(() => {
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
        this.utilitybpltasService.batchUpdatePayments(selectedPayments).subscribe(() => {
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
