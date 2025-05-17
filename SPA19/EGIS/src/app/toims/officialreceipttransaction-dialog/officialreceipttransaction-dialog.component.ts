import { Component, Inject } from '@angular/core';
import { IOfficialReceipt } from '../models/officialreceipt';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-officialreceipttransaction-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './officialreceipttransaction-dialog.component.html',
  styleUrl: './officialreceipttransaction-dialog.component.css'
})
export class OfficialreceipttransactionDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<OfficialreceipttransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IOfficialReceipt
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id:[data.id],
      receiptnumber:[data.receiptNumber || '',[Validators.required]],
      char:[data.char || '',[Validators.required]],
      payor:[data.payor || '',[Validators.required]],
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
