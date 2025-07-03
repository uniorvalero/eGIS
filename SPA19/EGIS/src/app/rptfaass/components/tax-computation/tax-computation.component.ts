import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ITaxComputation } from '../../models/taxcomputation';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { TaxComputationService } from '../../services/tax-computation.service';
import { TaxComputationDialogComponent } from '../tax-computation-dialog/tax-computation-dialog.component';
import { AssessmentService } from '../../services/assessment.service';

@Component({
  selector: 'app-tax-computation',
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
  templateUrl: './tax-computation.component.html',
  styleUrl: './tax-computation.component.css'
})
export class TaxComputationComponent implements OnInit {

  displayedColumns: string[] = ['taxYear', 'basicTax','sefTax','idleLandTax',
    'totalDue', 'discount','penalty', 'finalAmount', 'status','actions'];
  dataSource!: MatTableDataSource<ITaxComputation>;

  @ViewChild(MatPaginator) paginator!:MatPaginator; 
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<ITaxComputation>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(
    private taxComputationService: TaxComputationService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
      this.loadTax();
  }
  
  loadTax(): void{
    this.taxComputationService.getAllTax().subscribe((mcodes) =>
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

  openDialog(mCode?:ITaxComputation):void{
    const dialogRef=this.dialog.open(TaxComputationDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.taxComputationService.updateTax(result).subscribe(()=>{
            this.loadTax();
          });
        } else{
          this.taxComputationService.createTax(result).subscribe(()=>{
            this.loadTax();
          });
        }
      }
    })
  }

  deleteTax(id:number){
      if(confirm('Are you sure you want to delete this Tax?')){
        this.taxComputationService.deleteTax(id).subscribe(()=>{
          this.loadTax();
        })
      }
    }
}
