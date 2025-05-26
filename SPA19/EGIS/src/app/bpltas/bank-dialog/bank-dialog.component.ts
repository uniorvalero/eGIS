import { Component, Inject, } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { IBank } from '../models/bank';


@Component({
  selector: 'app-bank-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule
    
  ],
  templateUrl: './bank-dialog.component.html',
  styleUrl: './bank-dialog.component.css'
})
export class BankDialogComponent {

  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<BankDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IBank
  ){
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id:[data.id],
      bankname:[data.bankname || '',[Validators.required]],
      bankcode:[data.bankcode || '',[Validators.required]],
      branch:[data.branch || '',[Validators.required]],
      contactname:[data.contactname || '',[Validators.required]],
      contactno:[data.contactno || '',[Validators.required]],
      address:[data.address || '',[Validators.required]],
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



