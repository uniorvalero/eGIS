import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IRevenueCodeChild } from '../models/revenuecodechild';

@Component({
  selector: 'app-revenuecodechild-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './revenuecodechild-dialog.component.html',
  styleUrl: './revenuecodechild-dialog.component.css'
})
export class RevenuecodechildDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<RevenuecodechildDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IRevenueCodeChild
  ){
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id:[data.id],
      code:[data.code || '',[Validators.required]],
      amount:[data.amount || '',[Validators.required]],
      description:[data.description || '',[Validators.required]],
     
    })
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
