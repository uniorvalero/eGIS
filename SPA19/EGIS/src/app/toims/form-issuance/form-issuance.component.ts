import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IFormIssuance } from '../models/formissuance';
import { FormissuanceService } from '../services/formissuance.service';
import { FormIssuanceDialogComponent } from '../form-issuance-dialog/form-issuance-dialog.component';
import { FormIssuanceSetupDialogComponent } from '../form-issuance-setup-dialog/form-issuance-setup-dialog.component';

@Component({
  selector: 'app-form-issuance',
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
  templateUrl: './form-issuance.component.html',
  styleUrl: './form-issuance.component.css'
})
export class FormIssuanceComponent implements OnInit {

  displayedColumns: string[] = ['bookNumber','quantity','startReceipt','endReceipt','char','tellerCode','tellerName','finalDate','actions'];
  dataSource!: MatTableDataSource<IFormIssuance>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IFormIssuance>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private formIssuanceService: FormissuanceService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadFormIssuance();
  }

  loadFormIssuance(): void{
    this.formIssuanceService.getFormIssuances().subscribe((mcodes) =>
    {   
        this.dataSource = new MatTableDataSource(mcodes);
        console.log(mcodes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event:Event): void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openDialog(dto?:IFormIssuance):void{
    const dialogRef=this.dialog.open(FormIssuanceDialogComponent,{
      data:dto || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.formIssuanceService.updateFormIssuances(result).subscribe(()=>{
            this.loadFormIssuance();
          });
        } else{
          this.formIssuanceService.updateFormIssuances(result).subscribe(()=>{
            this.loadFormIssuance();
          });
        }
      }
    })
  }

  openSetupDialog(mCode?:IFormIssuance):void{
    const dialogRef=this.dialog.open(FormIssuanceSetupDialogComponent,{
      data:mCode || {}
    });
  }

  deleteFormIssuance(id:number){
    if(confirm('Are you sure you want to delete this form issuance?')){
      this.formIssuanceService.deleteFormIssuance(id).subscribe(()=>{
        this.loadFormIssuance();
      })
    }
  }
}
