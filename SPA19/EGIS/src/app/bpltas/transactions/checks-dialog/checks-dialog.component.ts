import { Component, Inject } from '@angular/core';
import { IChecks } from '../models/checks';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-checks-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    CommonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './checks-dialog.component.html',
  styleUrl: './checks-dialog.component.css'
})
export class ChecksDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<ChecksDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IChecks
  ){
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      checkno:[data.checkno || '',[Validators.required]],
      checkdate:[data.checkdate || '',[Validators.required]],
      amount:[data.amount || '',[Validators.required]],
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

