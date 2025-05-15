import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IFormIssuance } from '../models/formissuance';

@Component({
  selector: 'app-form-issuance-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
  ],
  templateUrl: './form-issuance-dialog.component.html',
  styleUrl: './form-issuance-dialog.component.css'
})

export class FormIssuanceDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<FormIssuanceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IFormIssuance
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id:[data.id],
      booknumber:[data.booknumber || '', [Validators.required]],
      quantity:[data.quantity || '', [Validators.required]],
      startreceipt:[data.startreceipt || '',[Validators.required]],
      endreceipt:[data.endreceipt || '',[Validators.required]],
      char:[data.char || '',[Validators.required]],
      tellercode:[data.tellercode || '',[Validators.required]],
      tellername:[data.tellername || '',[Validators.required]],
      finaldate:[data.finaldate || '',[Validators.required]],
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
