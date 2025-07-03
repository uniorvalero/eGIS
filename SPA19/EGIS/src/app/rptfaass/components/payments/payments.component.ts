import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IPayment } from '../../models/payment';
import { PaymentService } from '../../services/payment.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PaymentsDialogComponent } from '../payments-dialog/payments-dialog.component';
import { CommonModule } from '@angular/common';
import { PaymentsLedgersDialogComponent } from '../payments-ledgers-dialog/payments-ledgers-dialog.component';

@Component({
  selector: 'app-payments',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CommonModule
  ],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent implements OnInit {
  showSubCode = false;
  selectedMasterCode!: number;
  selectedDescription!: string;

  displayedColumns: string[] = ['paymentDate', 'amountPaid', 'paymentMethod', 'receiptNo', 'verifiedBy', 'actions'];
  dataSource!: MatTableDataSource<IPayment>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IPayment>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private paymentService: PaymentService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadPayment();
  }

  paymentLedgers(mCode:IPayment):void{
    const dialogRef=this.dialog.open(PaymentsLedgersDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.paymentService.updatePayments(result).subscribe(()=>{
          this.loadPayment();
        });
      }
    })
  }

  loadPayment(): void{
    this.paymentService.getAllPayments().subscribe((mcodes) =>
      {   
          this.dataSource = new MatTableDataSource(mcodes);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      });
  }

  applyFilter(event:Event): void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openDialog(mCode?:IPayment):void{
    const dialogRef=this.dialog.open(PaymentsDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.paymentService.updatePayments(result).subscribe(()=>{
            this.loadPayment();
          });
        } else{
          this.paymentService.createPayments(result).subscribe(()=>{
            this.loadPayment();
          });
        }
      }
    })
  }
  deletePayment(id:number){
    if(confirm('Are you sure you want to delete this payment?')){
      this.paymentService.deletePayments(id).subscribe(()=>{
        this.loadPayment();
      })
    }
  }
}
