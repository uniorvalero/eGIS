import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import { IChecks } from '../models/checks';
import { ChecksService } from '../services/checks.service';
import { ChecksDialogComponent } from '../checks-dialog/checks-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-checks',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './checks.component.html',
  styleUrl: './checks.component.css'
})
export class ChecksComponent implements OnInit {
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
    const dialogRef=this.dialog.open(ChecksDialogComponent,{
     
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
