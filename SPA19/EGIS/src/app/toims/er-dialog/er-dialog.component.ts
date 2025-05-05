import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IEstimatedRevenue } from '../models/estimatedrevenue';

@Component({
  selector: 'app-er-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './er-dialog.component.html',
  styleUrl: './er-dialog.component.css'
})
export class ErDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<ErDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IEstimatedRevenue
  ){
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id:[data.id],
      code:[data.code || '',[Validators.required]],
      amount:[data.amount || '',[Validators.required]],
      description:[data.description || '',[Validators.required]],
      setupyear:[data.setupyear || '',[Validators.required]],
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
