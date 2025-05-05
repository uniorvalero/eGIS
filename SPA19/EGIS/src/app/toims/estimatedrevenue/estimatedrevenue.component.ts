import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IEstimatedRevenue } from '../models/estimatedrevenue';
import { MatSort } from '@angular/material/sort';
import { EstimatedrevenueService } from '../services/estimatedrevenue.service';
import { MatDialog } from '@angular/material/dialog';
import { ErDialogComponent } from '../er-dialog/er-dialog.component';

@Component({
  selector: 'app-estimatedrevenue',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './estimatedrevenue.component.html',
  styleUrl: './estimatedrevenue.component.css'
})
export class EstimatedrevenueComponent implements OnInit{

  displayedColumns: string[] = ['id','code','amount','setupyear', 'description','actions']
  dataSource!: MatTableDataSource<IEstimatedRevenue>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IEstimatedRevenue>;
 
  constructor(private erService: EstimatedrevenueService,
               private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadER();
  }

  loadER(): void{
    this.erService.getEstimatedRevenue().subscribe((data) =>
      {   
         this.dataSource = new MatTableDataSource(data);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
      });
  }

   applyFilter(event:Event): void{
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
  
    openDialog(erdata?:IEstimatedRevenue):void{
      const dialogRef=this.dialog.open(ErDialogComponent,{
        data:erdata || {}
      });
  
     
      dialogRef.afterClosed().subscribe(result=>{
        if(result){
          if(result.id){
            this.erService.updateEstimatedRevenue(result).subscribe(()=>{
              this.loadER();
            });
          } else{
            this.erService.createEstiamatedRevenue(result).subscribe(()=>{
              this.loadER();
            });
          }
        }
      })
  
    }
  
    deleteER(id:number){
      if(confirm('Are you sure you want to delete this Estimated Revenue?')){
        this.erService.deleteER(id).subscribe(()=>{
          this.loadER();
        })
      }
    }

}
