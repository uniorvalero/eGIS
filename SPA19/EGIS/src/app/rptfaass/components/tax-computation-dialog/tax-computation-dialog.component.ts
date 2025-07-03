import { Component, Inject } from '@angular/core';
import { ITaxComputation } from '../../models/taxcomputation';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TaxDueDialogComponent } from '../tax-due-dialog/tax-due-dialog.component';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { AssessmentService } from '../../services/assessment.service';

@Component({
  selector: 'app-tax-computation-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSelectModule
  ],
  templateUrl: './tax-computation-dialog.component.html',
  styleUrl: './tax-computation-dialog.component.css'
})
export class TaxComputationDialogComponent {
  form:FormGroup;
  isEditMode:boolean;
  assessmentIdsWithAssessor: number[] = [];
  taxStatusOptions = [
    {name: 'Computted'},
    {name: 'Rejected'},
    {name: 'Delinquent'},
    {name: 'Inactive'},];
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<TaxComputationDialogComponent>,
    private dialog: MatDialog,
    private assessmentService: AssessmentService,
    @Inject(MAT_DIALOG_DATA) public data:ITaxComputation
  )
  {
    this.isEditMode=!!data.Id;
    this.form=this.fb.group({
      assessmentId: [data.assessmentId || null],
      taxYear: [data.taxYear || null],
      basicTax: [data.basicTax || 0],
      sefTax: [data.sefTax || 0],
      idleLandTax: [data.idleLandTax || 0],
      totalDue: [data.totalDue || 0],
      discount: [data.discount || 0],
      penalty: [data.penalty || 0],
      finalAmount: [data.finalAmount || 0],
      status: [data.status || '']
    })
    this.loadAssessmentIdsWithAssessor();
  }

  loadAssessmentIdsWithAssessor() {
    this.assessmentService.getAllAssessment().subscribe(assessments => {
      this.assessmentIdsWithAssessor = assessments
        .filter(a => !!a.assessedBy)
        .map(a => a.assessmentId); // or a.id, depending on your model
    });
  }

  openTaxDueDialog(): void {
    const dialogRef = this.dialog.open(TaxDueDialogComponent, {
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && result !== null) {
        this.form.patchValue({ totalDue: result });
      }
    });
  }

  onSubmit():void{
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel():void{
    this.dialogRef.close();
  }
}
