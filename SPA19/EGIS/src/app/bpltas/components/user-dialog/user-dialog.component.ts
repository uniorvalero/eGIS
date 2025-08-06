import { Component, Inject } from '@angular/core';
import { IBPLTASUser } from '../../models/bpltasuser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-user-dialog',
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
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.css'
})
export class UserDialogComponent {
  form:FormGroup;
  isEditMode:boolean;
  userStatusOptions = [
    { value: true, label: 'Active' },
    { value: false, label: 'Inactive' }
  ];
  userRolesOptions = [
    {name: 'Administrator'},
    {name: 'Owner'},
    {name: 'Inspector'},
    {name: 'Teller'},
  ]
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IBPLTASUser
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      firstName:[data.firstName || '', []],
      lastName:[data.lastName || '', []],
      middleName:[data.middleName || '', []],
      role:[data.role || '', []],
      email:[data.email || '', []],
      status:[data.status || '', []]
    })
  }

  onSubmit():void{
    if(this.form.valid){
      console.log('Form submitted:', this.form.value);
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel():void{
    this.dialogRef.close();
  }
}
