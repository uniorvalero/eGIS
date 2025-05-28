import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { IChecks } from '../models/checks';

@Component({
  selector: 'app-transaction-checks-dialog',
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
  templateUrl: './transaction-checks-dialog.component.html',
  styleUrl: './transaction-checks-dialog.component.css'
})
export class TransactionChecksDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<TransactionChecksDialogComponent>,
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
