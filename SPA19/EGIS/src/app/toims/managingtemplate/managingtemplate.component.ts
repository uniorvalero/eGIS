import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IManagingtemplate } from '../models/managingtemplate';
import { MatSort } from '@angular/material/sort';
import { ManagingtemplateService } from '../services/managingtemplate.service';
import { MatDialog } from '@angular/material/dialog';
import { MtDialogComponent } from '../mt-dialog/mt-dialog.component';

@Component({
  selector: 'app-managingtemplate',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './managingtemplate.component.html',
  styleUrl: './managingtemplate.component.css'
})
export class ManagingtemplateComponent implements OnInit {
 displayedColumns: string[] = ['id','code','amount','name', 'description','actions']
  dataSource!: MatTableDataSource<IManagingtemplate>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IManagingtemplate>;
 
  constructor(private mtService: ManagingtemplateService,
               private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadMT();
  }

  loadMT(): void{
    this.mtService.getMTList().subscribe((data) =>
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
  
    openDialog(mtdata?:IManagingtemplate):void{
      const dialogRef=this.dialog.open(MtDialogComponent,{
        data:mtdata || {}
      });
  
     
      dialogRef.afterClosed().subscribe(result=>{
        if(result){
          if(result.id){
            this.mtService.updateMT(result).subscribe(()=>{
              this.loadMT();
            });
          } else{
            this.mtService.createMT(result).subscribe(()=>{
              this.loadMT();
            });
          }
        }
      })
  
    }
  
    deleteMT(id:number){
      if(confirm('Are you sure you want to delete this Managing Template?')){
        this.mtService.deleteER(id).subscribe(()=>{
          this.loadMT();
        })
      }
    }

}
