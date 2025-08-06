import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { IBPLTASInspection } from '../../models/bpltasinspection';
import { BpltasinspectionService } from '../../services/bpltasinspection.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { BPLTASUsers, BpltasuserService } from '../../services/bpltasuser.service';
import { BpltasapplicationService } from '../../services/bpltasapplication.service';
import { identity } from 'rxjs';

@Component({
  selector: 'app-inspection-dialog',
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
    MatSelect
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './inspection-dialog.component.html',
  styleUrl: './inspection-dialog.component.css'
})
export class InspectionDialogComponent {
  form:FormGroup;
  isEditMode:boolean;
  userInspector: string = 'Inspector';
  forInspection: string = 'For Inspection';                                                                      
  users: BPLTASUsers[] = [];
  selectedUser: BPLTASUsers | null = null;
  applicationIds: number[] = [];
  inspectionStatusOptions = [
    { value: true, label: 'Active' },
    { value: false, label: 'Inactive' }];
  inspectionResultOptions = [
    {name: 'Passed'},
    {name: 'For Verification'},
    {name: 'Faileld'}];
    
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<InspectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IBPLTASInspection,
    private bpltasapplicationService : BpltasapplicationService,
    private bpltasuserService: BpltasuserService,
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id: [data.id],
      inspectorId: [null],
      applicationId: [data.applicationId || '', []],
      inspectionDate: [data.inspectionDate || '', []], 
      inspectionResult: [data.inspectionResult || '', []],
      inspectionStatus: [data.inspectionStatus || '', []],
      remarks: [data.remarks || '', []],
    })
    this.loadOwner();
    this.loadApplicationIds();
  }

  loadOwner() {
    this.bpltasuserService.getUserIDName(this.userInspector).subscribe(users => {
      this.users = users
    });
  }

  loadApplicationIds() {
    this.bpltasapplicationService.getApplicationIds(this.forInspection).subscribe(ids => {
      this.applicationIds = ids;
    });
  }

  onSelectedInspector(userId: number): void {
    const user = this.users.find(u => u.id === userId);
    this.selectedUser = user || null; 
    this.form.patchValue({
      payerId: userId
    });
  }

  onSubmit():void{
    const formValue = { ...this.form.value };
    if (this.form.valid) {
      if (formValue.inspectionDate instanceof Date) {
        // Convert to yyyy-MM-dd for DateOnly
        const year = formValue.inspectionDate.getFullYear();
        const month = String(formValue.inspectionDate.getMonth() + 1).padStart(2, '0');
        const day = String(formValue.inspectionDate.getDate()).padStart(2, '0');
        formValue.inspectionDate = `${year}-${month}-${day}`;
      }
      this.dialogRef.close(formValue);
      console.log('Form submitted with value:', formValue.inspectionDate, formValue.inspectionResult, formValue.inspectionStatus);
    }
  }

  onCancel():void{
    this.dialogRef.close();
  }
}
