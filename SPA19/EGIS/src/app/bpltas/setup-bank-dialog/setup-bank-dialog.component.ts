import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IBank } from '../models/bank';

@Component({
  selector: 'app-setup-bank-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './setup-bank-dialog.component.html',
  styleUrl: './setup-bank-dialog.component.css'
})
export class SetupBankDialogComponent {

  form:FormGroup;
  isEditMode:boolean;
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<SetupBankDialogComponent>,
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
