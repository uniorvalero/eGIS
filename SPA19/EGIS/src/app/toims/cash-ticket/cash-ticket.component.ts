import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { ICashTicket } from '../models/cashticket';
import { CashticketService } from '../services/cashticket.service';
import { CashTicketDialogComponent } from '../cash-ticket-dialog/cash-ticket-dialog.component';
import { CashTicketTellerDialogComponent } from '../cash-ticket-teller-dialog/cash-ticket-teller-dialog.component';

@Component({
  selector: 'app-cash-ticket',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './cash-ticket.component.html',
  styleUrl: './cash-ticket.component.css'
})
export class CashTicketComponent implements OnInit {
  showSubCode = false;
  selectedMasterCode!: number;
  selectedDescription!: string;

  displayedColumns: string[] = ['id','controlNumber', 'quantity','amount','tellerName','tellerCode','actions']
  dataSource!: MatTableDataSource<ICashTicket>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<ICashTicket>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router, private cashticketService: CashticketService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadCashTicket();
  }

  loadCashTicket(): void{
    this.cashticketService.getCashTickets().subscribe((mcodes) =>
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
  
  openDialog(mCode?:ICashTicket):void{
    const dialogRefs=this.dialog.open(CashTicketDialogComponent,{
      data:mCode || {}
    });
    dialogRefs.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.cashticketService.updateCashTicket(result).subscribe(()=>{
            this.loadCashTicket();
          });
        } else{
          this.cashticketService.createCashTicket(result).subscribe(()=>{
            this.loadCashTicket();
          });
        }
      }
    })
  }

  getAllTeller(){
    const dialogRef=this.dialog.open(CashTicketTellerDialogComponent,{
      data:{}
    });
    dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Selected teller:', result);
    }
  });
  } 

  deleteCashTicket(id:number){
    if(confirm('Are you sure you want to delete this master table code?')){
      this.cashticketService.deleteCashTicket(id).subscribe(()=>{
        this.loadCashTicket();
      })
    }
  }


}
