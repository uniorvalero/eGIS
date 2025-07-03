import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IAssessment } from '../../models/assessment';
import { AssessmentsDialogComponent } from '../assessments-dialog/assessments-dialog.component'; 
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { AssessmentService } from '../../services/assessment.service';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { UsersService } from '../../services/users.service';
import { forkJoin } from 'rxjs';
import { PropertyService } from '../../services/property.service';
import { IFaas } from '../../models/faas';

@Component({
  selector: 'app-assessments',
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
  templateUrl: './assessments.component.html',
  styleUrl: './assessments.component.css'
})
export class AssessmentsComponent implements OnInit {
  showSubCode = false;

  usersMap: { [key: number]: string } = {};

  displayedColumns: string[] = ['propertyLocation', 'taxDeclarationNo', 
    'titleNo', 'classification', 'landArea', 'assessedValue', 'marketValue',
    'assessmentLevel', 'assessedBy','actions'];
  dataSource!: MatTableDataSource<IFaas>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IFaas>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private assessmentService: AssessmentService, private dialog: MatDialog,
    private propertyService: PropertyService,
    private usersService: UsersService) {
  }

  ngOnInit(): void {
    // Load all users first, then load assessments
    this.usersService.getAllUsers().subscribe(users => {
      users.forEach(u => this.usersMap[u.userId] = u.userName); // or u.fullName if you want
      this.loadAssessment();
    });
  }

  loadAssessment(): void {
    this.assessmentService.getAllAssessment().subscribe((assessments) => {
      const propertyRequests = assessments.map(assess =>
        this.propertyService.getPropertyById(assess.propertyId)
      );

      forkJoin(propertyRequests).subscribe((properties) => {
        assessments.forEach((assess, idx) => {
          // Property details
          const property = properties[idx];
          if (property) {
            assess.propertyLocation = property.location;
            assess.taxDeclarationNo = Number(property.taxDeclarationNo);
            assess.titleNo = Number(property.titleNo);
            assess.classification = property.classification;
            assess.landArea = property.landArea;
          }
          // Assessor username from map
          assess.assessedByUserName = this.usersMap[assess.assessedBy] || 'N/A';
        });
        this.dataSource = new MatTableDataSource(assessments);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }
  
    applyFilter(event:Event): void{
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
  
    openDialog(mCode?:IAssessment):void{
      const dialogRef=this.dialog.open(AssessmentsDialogComponent,{
        data:mCode || {}
      });
      dialogRef.afterClosed().subscribe(result=>{
        if(result){
          if(result.id){
            this.assessmentService.updateAssessment(result).subscribe(()=>{
              this.loadAssessment();
            });
          } else{
            this.assessmentService.createAssessment(result).subscribe(()=>{
              this.loadAssessment();
            });
          }
        }
      })
    }
    deleteAssessment(id:number){
      if(confirm('Are you sure you want to delete this Assessment?')){
        this.assessmentService.deleteAssessment(id).subscribe(()=>{
          this.loadAssessment();
        })
      }
    }
}
