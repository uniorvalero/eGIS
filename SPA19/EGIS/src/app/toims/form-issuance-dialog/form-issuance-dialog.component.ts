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
      bookNumber:[data.bookNumber || '', [Validators.required]],
      quantity:[data.quantity || '', [Validators.required]],
      startReceipt:[data.startReceipt || '',[Validators.required]],
      endReceipt:[data.endReceipt || '',[Validators.required]],
      char:[data.char || '',[Validators.required]],
      tellerCode:[data.tellerCode || '',[Validators.required]],
      tellerName:[data.tellerName || '',[Validators.required]],
      finalDate:[data.finalDate ],
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
