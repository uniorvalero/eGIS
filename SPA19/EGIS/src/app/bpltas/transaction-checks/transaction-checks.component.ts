import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { IChecks } from '../models/checks';
import { ChecksService } from '../services/checks.service';
import { TransactionChecksDialogComponent } from '../transaction-checks-dialog/transaction-checks-dialog.component';

@Component({
  selector: 'app-transaction-checks',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './transaction-checks.component.html',
  styleUrl: './transaction-checks.component.css'
})
export class TransactionChecksComponent implements OnInit {
  displayedColumns: string[] = ['checkno', 'checkdate', 'amount'];
  dataSource!: MatTableDataSource<IChecks>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IChecks>;

  constructor(private checksService: ChecksService, private dialog: MatDialog){
  }
  ngOnInit(): void {
    this.loadChecks();
  }

  loadChecks(): void{
    this.checksService.getChecks().subscribe((mcodes) =>
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

  openDialog(mCode?:IChecks):void{
    const dialogRef=this.dialog.open(TransactionChecksDialogComponent,{
     
      data:mCode || {}
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.checksService.updateCheck(result).subscribe(()=>{
            this.loadChecks();
          });
        } else{
          this.checksService.createCheck(result).subscribe(()=>{
            this.loadChecks();
          });
        }
      }
    })
  }

  deleteChecks(id:number){
    if(confirm('Are you sure you want to delete this master table code?')){
      this.checksService.deleteCheck(id).subscribe(()=>{
        this.loadChecks();
      })
    }
  }
}
