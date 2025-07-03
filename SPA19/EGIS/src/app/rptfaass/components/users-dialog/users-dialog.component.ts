import { Component, Inject } from '@angular/core';
import { IUsers } from '../../models/users';
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
  selector: 'app-users-dialog',
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
  templateUrl: './users-dialog.component.html',
  styleUrl: './users-dialog.component.css'
})
export class UsersDialogComponent {
  form:FormGroup;
  isEditMode:boolean;
  userRolesOptions = [
    {name: 'Administrator'},
    {name: 'Owner'},
    {name: 'Payer'},
    {name: 'Assessor'},
    {name: 'Verifier'},
    {name: 'Collector'},
    {name: 'Teller'},
    {name: 'Auditor'},
    {name: 'Approver'},];
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<UsersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IUsers
  )
  {
    this.isEditMode=!!data.userId;
    this.form=this.fb.group({
      userName:[data.userName || '', []],
      password:[data.password || '', []],
      role:[data.role || '', []],
      email:[data.email || '', []],
      phone:[data.phone || '', []]
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
