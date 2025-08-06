import { Component, Inject } from '@angular/core';
import { IApp } from '../../models/app';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-user-app-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-app-dialog.component.html',
  styleUrl: './user-app-dialog.component.css'
})
export class UserAppDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<UserAppDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IApp                                                                                                                                                                    
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id: [data.id || null],
      name: [data.name || '', []],
      description: [data.description || '', []],
      version: [data.version || '', []],
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
