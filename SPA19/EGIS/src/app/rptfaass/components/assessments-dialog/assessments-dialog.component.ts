import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { IProperty } from '../../models/property';
import { User, UsersService } from '../../services/users.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PropertyService } from '../../services/property.service';
import { createAssessmentDto, IAssessment } from '../../models/assessment';
import { IFaas } from '../../models/faas';

@Component({
  selector: 'app-assessments-dialog',
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
    MatDatepickerModule,
    MatNativeDateModule, 
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './assessments-dialog.component.html',
  styleUrl: './assessments-dialog.component.css'
})
export class AssessmentsDialogComponent {
  form:FormGroup;
  isEditMode:boolean;
  selectedCode: any;
  selectedProperty: any = null;
  usersOwner: User[] = [];
  usersAssessor: User[] = [];
  selectedOwner: User | null = null;
  selectedAssessor: User | null = null;
  ownerProperties: IProperty[] = [];
  userOwner: string = 'Owner';
  userAssessor: string = 'Assessor';
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<AssessmentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFaas,
    private usersService: UsersService,
    private propertyService: PropertyService
  )
  {
    this.isEditMode=!!data.propertyId;
    this.form=this.fb.group({
      userId:[null],
      userName:[null],
      propertyId:[null],
      propertyLocation:[data.propertyLocation ],
      taxDeclarationNo:[data.taxDeclarationNo ],
      titleNo:[data.titleNo ],
      classification:[data.classification],
      location:[data.location ],
      landArea:[data.landArea ],
      assessedValue:[data.assessedValue ],
      marketValue:[data.marketValue ],
      assessmentLevel:[data.assessmentLevel ],
      assessmentDate: [data.assessmentDate ? new Date(data.assessmentDate) : ''],
      validUntil: [data.validUntil ? new Date(data.validUntil) : null], // Use null if validUntil is not provided
      assessedBy:[null]
    })
    this.loadOwner();
    this.loadAssessor();
  }

  loadOwner() {
    this.usersService.getUserIDName(this.userOwner).subscribe(users => {
        this.usersOwner = users
      });
  }

  loadAssessor() {
    this.usersService.getUserIDName(this.userAssessor).subscribe(users => {
      this.usersAssessor = users
    });
  }

  onSelectedOwner(userId: number): void {
    const user = this.usersOwner.find(u => u.id === userId);
    this.selectedOwner = user || null;
    this.form.patchValue({ ownerId: userId });
    this.propertyService.getAllProperties().subscribe(properties => {
      this.ownerProperties = properties.filter(p => p.ownerId === userId);
      this.form.patchValue({
        propertyId: null,
        propertyLocation: '',
        taxDeclarationNo: '',
        titleNo: '',
        classification: '',
        location: '',
        landArea: ''
      });
    });
  }

  onSelectedAssessor(userId: number): void {
    const user = this.usersAssessor.find(u => u.id === userId);
    this.selectedAssessor = user || null; 
    this.form.patchValue({assessedBy: userId});
    console.log('Selected Assessor:', this.selectedAssessor);
  }

  onSelectedTax(propertyId: number): void {
    const prop = this.ownerProperties.find(p => p.propertyId === propertyId);
    if (prop) {
      this.form.patchValue({
        propertyId: prop.propertyId,
        propertyLocation: prop.location,
        taxDeclarationNo: prop.taxDeclarationNo,
        titleNo: prop.titleNo,
        classification: prop.classification,
        location: prop.location,
        landArea: prop.landArea
      });
    }
  }

  onSubmit():void{
    if(this.form.valid){
      const formValue = this.form.value;
      if (formValue.assessmentDate instanceof Date) {
        // Convert to yyyy-MM-dd for DateOnly
        const year = formValue.assessmentDate.getFullYear();
        const month = String(formValue.assessmentDate.getMonth() + 1).padStart(2, '0');
        const day = String(formValue.assessmentDate.getDate()).padStart(2, '0');
        formValue.assessmentDate = `${year}-${month}-${day}`;
      }
      if (formValue.validUntil instanceof Date) {
        // Convert to yyyy-MM-dd for DateOnly
        const year = formValue.validUntil.getFullYear();
        const month = String(formValue.validUntil.getMonth() + 1).padStart(2, '0');
        const day = String(formValue.validUntil.getDate()).padStart(2, '0');
        formValue.validUntil = `${year}-${month}-${day}`;
      }
      this.dialogRef.close(formValue);
    }
  }

  onCancel():void{
    this.dialogRef.close();
  }
}
