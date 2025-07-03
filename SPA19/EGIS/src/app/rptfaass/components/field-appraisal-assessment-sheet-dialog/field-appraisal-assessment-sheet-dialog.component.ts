import { Component, Inject } from '@angular/core';
import { IFaas } from '../../models/faas';
import { FieldappraisalassessmentsheetService } from '../../services/fieldappraisalassessmentsheet.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule, MatSelectChange } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { UsersService } from '../../services/users.service';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-field-appraisal-assessment-sheet-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  templateUrl: './field-appraisal-assessment-sheet-dialog.component.html',
  styleUrl: './field-appraisal-assessment-sheet-dialog.component.css'
})
export class FieldAppraisalAssessmentSheetDialogComponent {
  form:FormGroup;
  isEditMode:boolean;
  selectedCode: any;
  selectedProperty: any = null;
  user: { name: string }[] = [];
  property: { taxDeclarationNo: number }[] = [];
  userOwner: string = 'owner';
  userAssessor: string = 'assessor';
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<FieldAppraisalAssessmentSheetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IFaas,
    private faasService: FieldappraisalassessmentsheetService,
    private usersService: UsersService,
    private propertyService: PropertyService
  )
  {
    this.isEditMode=!!data.propertyId;
    this.form=this.fb.group({
      assessmentId:[data.assessmentId],
      adminName:[data.adminName || '',[Validators.required]],
      propertyLocation:[data.propertyLocation || '',[Validators.required]],
      taxDeclarationNo:[data.taxDeclarationNo || '',[Validators.required]],
      titleNo:[data.titleNo || '',[Validators.required]],
      classification:[data.classification || '',[Validators.required]],
      location:[data.location || '',[Validators.required]],
      landArea:[data.landArea || '',[Validators.required]],
      assessedValue:[data.assessedValue || '',[Validators.required]],
      marketValue:[data.marketValue || '',[Validators.required]],
      assessmentLevel:[data.assessmentLevel || '',[Validators.required]],
      assessedBy:[data.assessedBy || '',[Validators.required]]
    })
    this.loadOwner();
    this.loadAssessor();
    this.loadProperty();
  }

  loadProperty() {
    this.faasService.getProperty().subscribe(properties => {
      this.property = properties.map(prop => ({
        taxDeclarationNo: prop.taxDeclarationNo
      }));

    });
  }

  loadOwner() {
    this.usersService.getNameByRoleList(this.userOwner).subscribe(users => {
      this.user = users.map(use => ({
        name: use
      }));
    });
  }

  loadAssessor() {
    this.usersService.getNameByRoleList(this.userAssessor).subscribe(users => {
      this.user = users.map(use => ({
        name: use
      }));
    });
  }

  onSelectionChange(event: MatSelectChange){
    this.selectedCode  = event.value;
    this.form.patchValue({
      code: this.selectedCode
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
