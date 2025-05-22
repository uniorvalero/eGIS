import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IOfficialReceipt } from '../models/officialreceipt';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { OfficialreceipttransactionService } from '../services/officialreceipttransaction.service';
import { OfficialreceipttransactionDialogComponent } from '../officialreceipttransaction-dialog/officialreceipttransaction-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OfficialreceipttransactionCancelReceiptDialogComponent } from '../officialreceipttransaction-cancel-receipt-dialog/officialreceipttransaction-cancel-receipt-dialog.component';

@Component({
  selector: 'app-officialreceipttransaction',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './officialreceipttransaction.component.html',
  styleUrl: './officialreceipttransaction.component.css'
})
export class OfficialreceipttransactionComponent implements OnInit{
  showOR = false;
  selectedORId!: number;
  selectedDescription!: string;

  displayedColumns: string[] = ['receiptNumber', 'char', 'payor','actions']
  dataSource!: MatTableDataSource<IOfficialReceipt>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IOfficialReceipt>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  constructor(private router: Router, private officialReceiptService: OfficialreceipttransactionService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadOfficialReceipt();
  }

  loadOfficialReceipt(): void{
    this.officialReceiptService.getOfficialReceipts().subscribe((mcodes) =>
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

  cancelReceipt(mCode?:IOfficialReceipt):void{
    console.log('Cancel Receipt:', mCode?.receiptNumber);
    const dialogRef=this.dialog.open(OfficialreceipttransactionCancelReceiptDialogComponent,{
      
      data:mCode || {}
      
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.officialReceiptService.updateOfficialReceipt(result).subscribe(()=>{
            this.loadOfficialReceipt();
          });
        } 
      }
    })
  }

  openDialog(mCode?:IOfficialReceipt):void{
    console.log('Edit Receipt:', mCode?.receiptNumber);
    const dialogRef=this.dialog.open(OfficialreceipttransactionDialogComponent,{
     
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.officialReceiptService.updateOfficialReceipt(result).subscribe(()=>{
            this.loadOfficialReceipt();
          });
        } else{
          this.officialReceiptService.createOfficialReceipt(result).subscribe(()=>{
            this.loadOfficialReceipt();
          });
        }
      }
    })
  }

  deleteOfficialReceipt(id:number){
    if(confirm('Are you sure you want to delete this OR code?')){
      this.officialReceiptService.deleteOfficialReceipt(id).subscribe(()=>{
        this.loadOfficialReceipt();
      })
    }
  }

  openOfficialReceiptDetails(ORId: number, payor: string): void {
    console.log('ReceiptNumber:', ORId, 'Payor:', payor); 
    this.router.navigate([`/mainlayout/officialreceiptdetails`, ORId, payor]);
    this.selectedORId = ORId;
    this.selectedDescription = payor;
    this.showOR = true; 
  }
}
