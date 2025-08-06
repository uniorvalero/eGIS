import { Component, Inject } from '@angular/core';
import { ICountry } from '../../models/country';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-user-country-dialog',
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-country-dialog.component.html',
  styleUrl: './user-country-dialog.component.css'
})
export class UserCountryDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<UserCountryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:ICountry
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id: [data.id || null],
      countryName: [data.countryName || '', []]
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
