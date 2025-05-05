import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ITeller } from '../models/teller';

@Component({
  selector: 'app-teller-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
  ],
  templateUrl: './teller-dialog.component.html',
  styleUrl: './teller-dialog.component.css'
})
export class TellerDialogComponent {

  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<TellerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:ITeller
  ){
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id:[data.id],
      code:[data.code || '',[Validators.required]],
      userid:[data.userid || '',[Validators.required]],
      description:[data.description || '',[Validators.required]],
      designation:[data.designation || '',[Validators.required]],
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
