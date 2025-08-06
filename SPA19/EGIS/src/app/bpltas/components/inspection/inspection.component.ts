import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { InspectionDialogComponent } from '../inspection-dialog/inspection-dialog.component';
import { IBPLTASInspection } from '../../models/bpltasinspection';
import { BpltasinspectionService } from '../../services/bpltasinspection.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-inspection',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CommonModule
  ],
  templateUrl: './inspection.component.html',
  styleUrl: './inspection.component.css'
})
export class InspectionComponent implements OnInit {
  showSubCode = false;
  selectedMasterCode!: number;
  selectedDescription!: string;

  displayedColumns: string[] = ['inspectorId', 'applicationId', 'inspectionDate', 'inspectionResult', 'inspectionStatus', 'remarks', 'actions'];
  dataSource!: MatTableDataSource<IBPLTASInspection>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IBPLTASInspection>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private bpltasinspectionService: BpltasinspectionService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadInspection();
  }

  loadInspection(): void{
    this.bpltasinspectionService.getInspection().subscribe((mcodes) =>
      {   
        console.log(mcodes);
          this.dataSource = new MatTableDataSource(mcodes);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      });
  }

  applyFilter(event:Event): void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openDialog(mCode?:IBPLTASInspection):void{
    const dialogRef=this.dialog.open(InspectionDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          console.log('for edit',result);
          this.bpltasinspectionService.updateInspection(result).subscribe(()=>{
            this.loadInspection();
          });
        } else{
          console.log('for create',result);
          this.bpltasinspectionService.createInspection(result).subscribe(()=>{
            this.loadInspection();
          });
        }
      }
    })
  }
  deleteInspection(id:number){
    if(confirm('Are you sure you want to delete this inspection?')){
      this.bpltasinspectionService.deleteInspection(id).subscribe(()=>{
        this.loadInspection();
      })
    }
  }
}
