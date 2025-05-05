import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table'
import { IBilling } from '../models/billing';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BillingService } from '../services/billing.service';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDialog} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BillingDialogComponent } from '../billing-dialog/billing-dialog.component';
import { IChecks } from '../models/checks';

@Component({
  selector: 'app-billing',
  imports: [
    //MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    //MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent implements OnInit {
  displayedColumns: string[] = ['accountno', 'description', 'taxdue', 'discount', 'penalty', 'totaldue', 'period', 'year'];
  dataSource!: MatTableDataSource<IBilling>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IBilling>;

  constructor(private billingService: BillingService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadBilling();
  }

  loadBilling(): void{
    this.billingService.getBillings().subscribe((mcodes) =>
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

  openDialog(mCode?:IBilling):void{
    const dialogRef=this.dialog.open(BillingDialogComponent,{
     
      data:mCode || {}
    });

   
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.billingService.updateBilling(result).subscribe(()=>{
            this.loadBilling();
          });
        } else{
          this.billingService.createBilling(result).subscribe(()=>{
            this.loadBilling();
          });
        }
      }
    })
  }

  deleteBilling(id:number){
    if(confirm('Are you sure you want to delete this master table code?')){
      this.billingService.deleteBilling(id).subscribe(()=>{
        this.loadBilling();
      })
    }
  }
}
