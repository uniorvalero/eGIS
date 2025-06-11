import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IRptasCode } from '../models/rptascode';
import { RptascodeService } from '../services/rptascode.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { IMastercode } from '../../toims/models/mastercode';
import { RptasCodeDialogComponent } from '../rptas-code-dialog/rptas-code-dialog.component';

@Component({
  selector: 'app-rptas-code',
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
  templateUrl: './rptas-code.component.html',
  styleUrl: './rptas-code.component.css'
})
export class RptasCodeComponent implements OnInit {
  showSubCode = false;
  selectedMasterCode!: number;
  selectedDescription!: string;

  displayedColumns: string[] = ['id','code', 'description','actions']
  dataSource!: MatTableDataSource<IRptasCode>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IMastercode>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router, private rptascodeService: RptascodeService, private dialog: MatDialog){
  }

  ngOnInit(): void {
      this.loadMasterCode();
    }
  
    loadMasterCode(): void{
      this.rptascodeService.getMasteCodes().subscribe((mcodes) =>
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
      const dialogRef=this.dialog.open(RptasCodeDialogComponent,{
        data:mCode || {}
      });
      dialogRef.afterClosed().subscribe(result=>{
        if(result){
          if(result.id){
            this.rptascodeService.updateMasterCode(result).subscribe(()=>{
              this.loadMasterCode();
            });
          } else{
            this.rptascodeService.createMasterCode(result).subscribe(()=>{
              this.loadMasterCode();
            });
          }
        }
      })
    }
    deleteMasterCode(id:number){
      if(confirm('Are you sure you want to delete this master table code?')){
        this.rptascodeService.deleteMasterCode(id).subscribe(()=>{
          this.loadMasterCode();
        })
      }
    }
  
    openMasterSubCode(code: number, description: string): void {
      this.router.navigate([`/mainlayout/mastersubcode`, code, description]);
      this.selectedMasterCode = code;
      this.selectedDescription = description;
      this.showSubCode = true; 
    }
}
