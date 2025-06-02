import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ICashTicket } from '../models/cashticket';

@Component({
  selector: 'app-cash-ticket-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './cash-ticket-dialog.component.html',
  styleUrl: './cash-ticket-dialog.component.css'
})
export class CashTicketDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<CashTicketDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:ICashTicket
  )
  {
    this.isEditMode=!!data.id;
    console.log(data); // Log the data to check if it is being passed correctly
    this.form=this.fb.group({
      id:[data.id],
      controlNumber:[data.controlNumber || '',[Validators.required]],
      quantity:[data.quantity || '',[Validators.required]],
      amount:[data.amount || '',[Validators.required]],
      tellerName:[data.tellerName || '',[Validators.required]],
      tellerCode:[data.tellerCode || '',[Validators.required]],
    })
  }

  onSubmit():void{
    if(this.form.valid){
      console.log(this.form.value); // Log the form value to check if it is being submitted correctly
      this.dialogRef.close(this.form.value);
    }
  }
  onCancel():void{
    this.dialogRef.close();
  }
}
