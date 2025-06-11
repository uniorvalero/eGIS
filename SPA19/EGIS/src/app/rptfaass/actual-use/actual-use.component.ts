import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IActualUse } from '../models/actualuse';
import { ActualuseService } from '../services/actualuse.service';
import { ActualUseDialogComponent } from '../actual-use-dialog/actual-use-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actual-use',
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
  templateUrl: './actual-use.component.html',
  styleUrl: './actual-use.component.css'
})
export class ActualUseComponent implements OnInit {
  showSubCode = false;
  selectedMasterCode!: number;
  selectedDescription!: string;

  displayedColumns: string[] = ['class','classDescription','actions']
  dataSource!: MatTableDataSource<IActualUse>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IActualUse>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router, private actualuseService: ActualuseService, private dialog: MatDialog){
  }

  ngOnInit(): void {
      this.loadMasterCode();
    }
  
    loadMasterCode(): void{
      this.actualuseService.getMasteCodes().subscribe((mcodes) =>
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
  
    openDialog(mCode?:IActualUse):void{
      const dialogRef=this.dialog.open(ActualUseDialogComponent,{
        data:mCode || {}
      });
      dialogRef.afterClosed().subscribe(result=>{
        if(result){
          if(result.id){
            this.actualuseService.updateMasterCode(result).subscribe(()=>{
              this.loadMasterCode();
            });
          } else{
            this.actualuseService.createMasterCode(result).subscribe(()=>{
              this.loadMasterCode();
            });
          }
        }
      })
    }
    deleteMasterCode(id:number){
      if(confirm('Are you sure you want to delete this master table code?')){
        this.actualuseService.deleteMasterCode(id).subscribe(()=>{
          this.loadMasterCode();
        })
      }
    }
  
    openMasterSubCode(code: number, description: string): void {
      this.router.navigate([`/mainlayout/actualuse`, code, description]);
      this.selectedMasterCode = code;
      this.selectedDescription = description;
      this.showSubCode = true; 
    }
}
