import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IManagingtemplate } from '../models/managingtemplate';

@Component({
  selector: 'app-mt-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './mt-dialog.component.html',
  styleUrl: './mt-dialog.component.css'
})
export class MtDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<MtDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IManagingtemplate
  ){
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id:[data.id],
      code:[data.code || '',[Validators.required]],
      amount:[data.amount || '',[Validators.required]],
      description:[data.description || '',[Validators.required]],
      name:[data.name || '',[Validators.required]],
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
