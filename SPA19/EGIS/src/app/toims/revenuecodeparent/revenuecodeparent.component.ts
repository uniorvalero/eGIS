import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IRevenueCodeParent } from '../models/revenuecodeparent';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RevenuecodeparentService } from '../services/revenuecodeparent.service';
import { MatDialog } from '@angular/material/dialog';
import { RevenuecodeparentDialogComponent } from '../revenuecodeparent-dialog/revenuecodeparent-dialog.component';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-revenuecodeparent',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './revenuecodeparent.component.html',
  styleUrl: './revenuecodeparent.component.css'
})
export class RevenuecodeparentComponent implements OnInit {

  displayedColumns: string[] = ['id','code','seqNo','kind', 'description','actions']
  dataSource!: MatTableDataSource<IRevenueCodeParent>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IRevenueCodeParent>;

  constructor(private revenuecodeparentService: RevenuecodeparentService,
               private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadRevenueCodeParent();
  }

  loadRevenueCodeParent(): void{
    this.revenuecodeparentService.getRevenueCodeParentLst().subscribe((rcodes) =>
      {   
         this.dataSource = new MatTableDataSource(rcodes);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
         
      });
  }

   applyFilter(event:Event): void{
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
  
    openDialog(rCodes?:IRevenueCodeParent):void{
      const dialogRef=this.dialog.open(RevenuecodeparentDialogComponent,{
       
        data:rCodes || {}
      });
  
     
      dialogRef.afterClosed().subscribe(result=>{
        if(result){
          if(result.id){
            this.revenuecodeparentService.updateRevenueCodeParent(result).subscribe(()=>{
              this.loadRevenueCodeParent();
            });
          } else{
            this.revenuecodeparentService.createRevenueCodeParent(result).subscribe(()=>{
              this.loadRevenueCodeParent();
            });
          }
        }
      })
  
    }
  
    deleteRevenueCodeParent(id:number){
      if(confirm('Are you sure you want to delete this revenue code parent?')){
        this.revenuecodeparentService.deleteRevenueCodeParent(id).subscribe(()=>{
          this.loadRevenueCodeParent();
        })
      }
    }

}
