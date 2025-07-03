import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IFaas } from '../../models/faas';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { PropertyDialogComponent } from '../property-dialog/property-dialog.component';
import { FieldappraisalassessmentsheetService } from '../../services/fieldappraisalassessmentsheet.service';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FieldAppraisalAssessmentSheetDialogComponent } from '../field-appraisal-assessment-sheet-dialog/field-appraisal-assessment-sheet-dialog.component';

@Component({
  selector: 'app-field-appraisal-assessment-sheet',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CommonModule,
    MatSelectModule,
    MatOptionModule,
  ],
  templateUrl: './field-appraisal-assessment-sheet.component.html',
  styleUrl: './field-appraisal-assessment-sheet.component.css'
})
export class FieldAppraisalAssessmentSheetComponent implements OnInit {
  showSubCode = false;
  selectedCode: string | null = null;
  taxDeclarationNumber: any[] = [];
  selectedProperty: any = null;

  displayedColumns: string[] = ['adminName', 'propertyLocation', 
    'taxDeclarationNo', 'titleNo', 'classification', 'location', 'landArea', 'assessedValue', 'marketValue', 
    'assessmentLevel', 'assessedBy', 'actions'];
  dataSource!: MatTableDataSource<IFaas>;

  @ViewChild(MatPaginator) paginator!:MatPaginator; 
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IFaas>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router, private faasService: FieldappraisalassessmentsheetService, private dialog: MatDialog){
  }

    ngOnInit(): void {
        this.loadFaas();
    }

    loadFaas(): void{
      this.faasService.getAllFaas().subscribe((mcodes) =>
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
  
    openDialog(mCode?:IFaas):void{
      const dialogRef=this.dialog.open(FieldAppraisalAssessmentSheetDialogComponent,{
        data:mCode || {}
      });
      dialogRef.afterClosed().subscribe(result=>{
        if(result){
          if(result.id){
            this.faasService.updateFaas(result).subscribe(()=>{
              this.loadFaas();
            });
          } else{
            this.faasService.createFaas(result).subscribe(()=>{
              this.loadFaas();
            });
          }
        }
      })
    }
    deleteFaas(id:number){
      if(confirm('Are you sure you want to delete this master table code?')){
        this.faasService.deleteFaas(id).subscribe(()=>{
          this.loadFaas();
        })
      }
    }

}
