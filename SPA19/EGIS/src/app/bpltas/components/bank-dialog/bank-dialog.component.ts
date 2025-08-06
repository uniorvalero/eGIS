import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IBPLTASBank } from '../../models/bpltasbank';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-bank-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSelectModule
  ],
  templateUrl: './bank-dialog.component.html',
  styleUrl: './bank-dialog.component.css'
})
export class BankDialogComponent {
  form:FormGroup;
  isEditMode:boolean;
  banksOptions = [
    {name: 'BDO'},
    {name: 'CHINA BANK'},
    {name: 'BPI'},
    {name: 'METROBANK'},
    {name: 'RCBC'},
    {name: 'UNION BANK'}
  ];
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<BankDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IBPLTASBank
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      bankName:[data.bankName || '', []],
      bankCode:[data.bankCode || '', []],
      branch:[data.branch || '', []],
      address:[data.address || '', []],
    })
  }

  onSubmit():void{
    if(this.form.valid){
      console.log('Form submitted:', this.form.value);
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel():void{
    this.dialogRef.close();
  }
}

