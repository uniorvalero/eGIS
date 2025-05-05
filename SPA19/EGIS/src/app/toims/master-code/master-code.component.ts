import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table'
import { IMastercode } from '../models/mastercode';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MastercodeService } from '../services/mastercode.service';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDialog} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MasterCodeDialogComponent } from '../master-code-dialog/master-code-dialog.component';

@Component({
  selector: 'app-master-code',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './master-code.component.html',
  styleUrl: './master-code.component.css'
})
export class MasterCodeComponent implements OnInit {
  displayedColumns: string[] = ['id','code', 'description','actions']
  dataSource!: MatTableDataSource<IMastercode>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IMastercode>;

  constructor(private mastercodeService: MastercodeService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadMasterCode();
  }

  loadMasterCode(): void{
    this.mastercodeService.getMasteCodes().subscribe((mcodes) =>
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

  openDialog(mCode?:IMastercode):void{
    const dialogRef=this.dialog.open(MasterCodeDialogComponent,{
     
      data:mCode || {}
    });

   
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.mastercodeService.updateMasterCode(result).subscribe(()=>{
            this.loadMasterCode();
          });
        } else{
          this.mastercodeService.createMasterCode(result).subscribe(()=>{
            this.loadMasterCode();
          });
        }
      }
    })

  }

  deleteMasterCode(id:number){
    if(confirm('Are you sure you want to delete this master table code?')){
      this.mastercodeService.deleteMasterCode(id).subscribe(()=>{
        this.loadMasterCode();
      })
    }
  }

}
