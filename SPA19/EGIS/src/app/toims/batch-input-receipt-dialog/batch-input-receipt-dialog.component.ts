import { Component, Inject } from '@angular/core';
import { IBatchReceipt } from '../models/batchreceipt';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-batch-input-receipt-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './batch-input-receipt-dialog.component.html',
  styleUrl: './batch-input-receipt-dialog.component.css'
})
export class BatchInputReceiptDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<BatchInputReceiptDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IBatchReceipt
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id:[data.id],
      setupDate:[data.setupDate || '',[Validators.required]],
      setupForm:[data.setupForm || '',[Validators.required]],
      startingSeries:[data.startingSeries || '',[Validators.required]],
      endingSeries:[data.endingSeries || '',[Validators.required]],
      char: [data.char || '',[Validators.required]],
      payor: [data.payor || '',[Validators.required]],
      accountCode: [data.accountCode || '',[Validators.required]],
      description: [data.description || '',[Validators.required]],
      bookNumber: [data.bookNumber || '',[Validators.required]],
      amount: [data.amount || '',[Validators.required]]
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


