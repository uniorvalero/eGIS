import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IBPLTASPayment } from '../../models/bpltaspayment';
import { BpltaspaymentService } from '../../services/bpltaspayment.service';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';
import { BpltasapplicationService } from '../../services/bpltasapplication.service';

@Component({
  selector: 'app-payment',
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
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  showSubCode = false;
  selectedMasterCode!: number;
  selectedDescription!: string;

  displayedColumns: string[] = ['applicationId', 'receiptNo', 'typeOfPayment', 'amount', 'status', 'paymentDate', 'actions'];
  dataSource!: MatTableDataSource<IBPLTASPayment>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IBPLTASPayment>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private bpltaspaymentService: BpltaspaymentService, private dialog: MatDialog,
    private bpltasapplicationService: BpltasapplicationService
  ){
  }

  ngOnInit(): void {
    this.loadPayment();
  }

  paymentLedgers(mCode:IBPLTASPayment):void{
    const dialogRef=this.dialog.open(PaymentDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.bpltaspaymentService.updatePayment(result).subscribe(()=>{
          this.loadPayment();
        });
      }
    })
  }

  loadPayment(): void{
    this.bpltaspaymentService.getPayment().subscribe((mcodes) =>
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

  openDialog(mCode?:IBPLTASPayment):void{
    const dialogRef=this.dialog.open(PaymentDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.bpltaspaymentService.updatePayment(result).subscribe(()=>{
            this.loadPayment();
          });
        } else{
          this.bpltaspaymentService.createPayment(result).subscribe(()=>{
            this.loadPayment();
          });
        }
      }
    })
  }
  deletePayment(id:number){
    if(confirm('Are you sure you want to delete this payment?')){
      this.bpltaspaymentService.deletePayment(id).subscribe(()=>{
        this.loadPayment();
      })
    }
  }
}
