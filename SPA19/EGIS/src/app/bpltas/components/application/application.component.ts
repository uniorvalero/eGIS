import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IBPLTASApplication } from '../../models/bpltasapplication';
import { BpltasapplicationService } from '../../services/bpltasapplication.service';
import { ApplicationDialogComponent } from '../application-dialog/application-dialog.component';
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
  selector: 'app-application',
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
  templateUrl: './application.component.html',
  styleUrl: './application.component.css'
})
export class ApplicationComponent implements OnInit {
  showSubCode = false;
  selectedMasterCode!: number;
  selectedDescription!: string;

  displayedColumns: string[] = ['ownerId', 'businessName', 'businessPermitNo', 'status', 'applicationDate', 'releaseDate' , 'actions'];
  dataSource!: MatTableDataSource<IBPLTASApplication>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IBPLTASApplication>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private bpltasapplicationServicee: BpltasapplicationService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadApplication();
  }

  loadApplication(): void{
    this.bpltasapplicationServicee.getApplications().subscribe((mcodes) =>
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

  openDialog(mCode?:IBPLTASApplication):void{
    const dialogRef=this.dialog.open(ApplicationDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          console.log('for edit', result);
          this.bpltasapplicationServicee.updateApplication(result).subscribe(()=>{
            this.loadApplication();
          });
        } else{
          console.log('for create', result);
          this.bpltasapplicationServicee.createApplication(result).subscribe(()=>{
            this.loadApplication();
          });
        }
      }
    })
  }
  deleteApplication(id:number){
    if(confirm('Are you sure you want to delete this applicaition?')){
      this.bpltasapplicationServicee.deleteAApplication(id).subscribe(()=>{
        this.loadApplication();
      })
    }
  }
}
