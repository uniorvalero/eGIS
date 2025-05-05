import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IRevenueCodeParent } from '../models/revenuecodeparent';

@Component({
  selector: 'app-revenuecodeparent-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './revenuecodeparent-dialog.component.html',
  styleUrl: './revenuecodeparent-dialog.component.css'
})
export class RevenuecodeparentDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<RevenuecodeparentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IRevenueCodeParent
  ){
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id:[data.id],
      code:[data.code || '',[Validators.required]],
      kind:[data.kind || '',[Validators.required]],
      seqNo:[data.seqNo || '',[Validators.required]],
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
