import { Component, Inject } from '@angular/core';
import { RptasCodeDialogComponent } from '../rptas-code-dialog/rptas-code-dialog.component';
import { IRptasCode } from '../models/rptascode';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-rptas-sub-code-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './rptas-sub-code-dialog.component.html',
  styleUrl: './rptas-sub-code-dialog.component.css'
})
export class RptasSubCodeDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<RptasCodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IRptasCode
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id:[data.id],
      code:[data.code || '',[Validators.required]],
      description:[data.description || '',[Validators.required]],
     
    })
  }

  onSubmit():void{
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
  }
  onCancel():void{
    this
  }
}