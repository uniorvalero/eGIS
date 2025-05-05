import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MastersubcodeService } from '../../services/mastersubcode.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatDialog} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { IMasterSubcode } from '../../models/submastercode';
import { MasterSubCodeDialogComponent } from '../../master-sub-code-dialog/master-sub-code-dialog.component';


@Component({
  selector: 'app-master-subcode',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './master-subcode.component.html',
  styleUrl: './master-subcode.component.css'
})
export class MasterSubcodeComponent implements OnInit {

  displayedColumns: string[] = ['id','code','subcode', 'description','actions']
  dataSource!: MatTableDataSource<IMasterSubcode>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IMasterSubcode>;

  constructor(private mastersubcodeService: MastersubcodeService, private dialog: MatDialog){
  }
  ngOnInit(): void {
    this.loadMasterSubCode();
  }

  loadMasterSubCode(): void{
    this.mastersubcodeService.getMasteSubCodes().subscribe((mscodes) =>
      {   
         this.dataSource = new MatTableDataSource(mscodes);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
         
      });
  }

   applyFilter(event:Event): void{
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
  
    openDialog(msCode?:IMasterSubcode):void{
      const dialogRef=this.dialog.open(MasterSubCodeDialogComponent,{
       
        data:msCode || {}
      });
  
     
      dialogRef.afterClosed().subscribe(result=>{
        if(result){
          if(result.id){
            this.mastersubcodeService.updateMasterSubCode(result).subscribe(()=>{
              this.loadMasterSubCode();
            });
          } else{
            this.mastersubcodeService.createMasterSubCode(result).subscribe(()=>{
              this.loadMasterSubCode();
            });
          }
        }
      })
  
    }
  
    deleteMasterSubCode(id:number){
      if(confirm('Are you sure you want to delete this master sub table code?')){
        this.mastersubcodeService.deleteMasterSubCode(id).subscribe(()=>{
          this.loadMasterSubCode();
        })
      }
    }
}
