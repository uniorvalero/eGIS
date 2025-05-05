import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { IPayment } from '../models/payment';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';

@Component({
  selector: 'app-payment',
  imports: [
    //MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    //MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  displayedColumns: string[] = ['accountno', 'description', 'taxdue', 'discount', 'penalty', 'totaldue', 'period', 'year'];
  dataSource!: MatTableDataSource<IPayment>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IPayment>;

  constructor(private paymentService: PaymentService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadPayment();
  }

  loadPayment(): void{
    this.paymentService.getPayments().subscribe((mcodes) =>
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
    const dialogRef=this.dialog.open(PaymentDialogComponent,{
     
      data:mCode || {}
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.paymentService.updatePayment(result).subscribe(()=>{
            this.loadPayment();
          });
        } else{
          this.paymentService.createPayment(result).subscribe(()=>{
            this.loadPayment();
          });
        }
      }
    })
  }

  deletePayment(id:number){
    if(confirm('Are you sure you want to delete this master table code?')){
      this.paymentService.deletePayment(id).subscribe(()=>{
        this.loadPayment();
      })
    }
  }
}
