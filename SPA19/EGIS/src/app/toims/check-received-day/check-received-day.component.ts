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
import { ICheckReceivedDay } from '../models/checkreceivedday';
import { CheckreceiveddayService } from '../services/checkreceivedday.service';
import { CheckReceivedDayDialogComponent } from '../check-received-day-dialog/check-received-day-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-check-received-day',
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
  templateUrl: './check-received-day.component.html',
  styleUrl: './check-received-day.component.css'
})
export class CheckReceivedDayComponent implements OnInit {
  displayedColumns: string[] = ['id', 'receiptNumber', 'bankNumber', 'bankName', 'checkNumber', 'checkAmount', 'checkDate', 'actions'];
  dataSource!: MatTableDataSource<ICheckReceivedDay>;
  
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<ICheckReceivedDay>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router, private checkReceivedDayService: CheckreceiveddayService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadCheckReceivedDay();
  }

  loadCheckReceivedDay(): void{
    this.checkReceivedDayService.getCheckReceivedDays().subscribe((mcodes) =>
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

  openDialog(mCode?:ICheckReceivedDay):void{
    const dialogRef=this.dialog.open(CheckReceivedDayDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.checkReceivedDayService.updateCheckReceivedDay(result).subscribe(()=>{
            this.loadCheckReceivedDay();
          });
        } else{
          this.checkReceivedDayService.createCheckReceivedDay(result).subscribe(()=>{
            this.loadCheckReceivedDay();
          });
        }
      }
    })
  }
  deleteCheckReceivedDay(id:number){
    if(confirm('Are you sure you want to delete this Check Received?')){
      this.checkReceivedDayService.deleteCheckReceivedDay(id).subscribe(()=>{
        this.loadCheckReceivedDay();
      })
    }
  }
}
