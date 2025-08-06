import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { IBPLTASApplication } from '../../models/bpltasapplication';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BPLTASUsers, BpltasuserService } from '../../services/bpltasuser.service';

@Component({
  selector: 'app-application-dialog',
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
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './application-dialog.component.html',
  styleUrl: './application-dialog.component.css'
})
export class ApplicationDialogComponent {
  form:FormGroup;
  isEditMode:boolean;
  userOwner: string = 'Owner';
  users: BPLTASUsers[] = [];
  selectedUser: BPLTASUsers | null = null;
  statusOptions = [
    {name: 'Approved'},
    {name: 'Cancelled'},
    {name: 'For Inspection'},
    ];
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<ApplicationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IBPLTASApplication,
    private bpltasuserService: BpltasuserService,
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id: [data.id || null],
      ownerId: [data.ownerId || null],
      businessName:[data.businessName || '', []],
      businessPermitNo:[data.businessPermitNo || '', []],
      status:[data.status || '', []],
      applicationDate:[data.applicationDate || '', []],
      releaseDate:[data.releaseDate || '', []],
    })
    this.loadOwner();
  }

  loadOwner() {
    this.bpltasuserService.getUserIDName(this.userOwner).subscribe(users => {
      this.users = users
      console.log('Users loaded:', this.users);
    });
  }

  onSelectedOwner(userId: number): void {
    const user = this.users.find(u => u.id === userId);
    this.selectedUser = user || null; 
    console.log('Selected user:', this.selectedUser);
    this.form.patchValue({
      
      ownerId: userId
    });
  }

  onSubmit():void{
    const formValue = { ...this.form.value };
    if (this.form.valid) {
      if (formValue.applicationDate instanceof Date) {
        // Convert to yyyy-MM-dd for DateOnly
        const year = formValue.applicationDate.getFullYear();
        const month = String(formValue.applicationDate.getMonth() + 1).padStart(2, '0');
        const day = String(formValue.applicationDate.getDate()).padStart(2, '0');
        formValue.applicationDate = `${year}-${month}-${day}`;
      }
      if(formValue.releaseDate instanceof Date) {
        // Convert to yyyy-MM-dd for DateOnly
        const year = formValue.releaseDate.getFullYear();
        const month = String(formValue.releaseDate.getMonth() + 1).padStart(2, '0');
        const day = String(formValue.releaseDate.getDate()).padStart(2, '0');
        formValue.releaseDate = `${year}-${month}-${day}`;
      }
      // Always return the id for update
      formValue.id = this.form.get('id')?.value;
      console.log('Form submitted with value:', formValue);
      this.dialogRef.close(formValue);
    }
  }

  onCancel():void{
    this.dialogRef.close();
  }
}
