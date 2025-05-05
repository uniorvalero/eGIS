import { Component, OnInit, ViewChild } from '@angular/core';
import { IAccountAdjustment } from '../models/accountadjustment';
import { AccountadjustmentService } from '../services/accountadjustment.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';

@Component({
  selector: 'app-accountadjustment',
  imports: [
    //MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    //MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './accountadjustment.component.html',
  styleUrl: './accountadjustment.component.css'
})
export class AccountadjustmentComponent implements OnInit {
  displayedColumns: string[] = ['accountno', 'description', 'taxdue', 'discount', 'penalty', 'totaldue', 'period', 'year'];
  dataSource!: MatTableDataSource<IAccountAdjustment>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IAccountAdjustment>;

  constructor(private accountAdjustmentService: AccountadjustmentService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadAccountAdjustment();
  }

  loadAccountAdjustment(): void{
    this.accountAdjustmentService.getAccountAdjustments().subscribe((mcodes) =>
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

  // openDialog(mCode?:IAccountAdjustment):void{
  //   const dialogRef=this.dialog.open(AccountadjustmentComponent,{
     
  //     data:mCode || {}
  //   });

   
  //   dialogRef.afterClosed().subscribe(result=>{
  //     if(result){
  //       if(result.id){
  //         this.accountAdjustmentService.updateAccountAdjustment(result).subscribe(()=>{
  //           this.loadAccountAdjustment();
  //         });
  //       } else{
  //         this.accountAdjustmentService.createAccountAdjustment(result).subscribe(()=>{
  //           this.loadAccountAdjustment();
  //         });
  //       }
  //     }
  //   })
  // }

  // deleteAccountAdjustment(id:number){
  //   if(confirm('Are you sure you want to delete this master table code?')){
  //     this.accountAdjustmentService.deleteAccountAdjustment(id).subscribe(()=>{
  //       this.loadAccountAdjustment();
  //     })
  //   }
  // }
}
