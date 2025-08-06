import { Component, Inject } from '@angular/core';
import { IUser } from '../../models/user';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { UsersDialogComponent } from '../../../rptfaass/components/users-dialog/users-dialog.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-user-list-dialog',
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-list-dialog.component.html',
  styleUrl: './user-list-dialog.component.css'
})
export class UserListDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<UsersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IUser
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      firstName:[data.firstName || '', []],
      middleName:[data.middleName || '', []],
      lastName:[data.lastName || '', []],
      isVerified:[data.isVerified || false, []]
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
