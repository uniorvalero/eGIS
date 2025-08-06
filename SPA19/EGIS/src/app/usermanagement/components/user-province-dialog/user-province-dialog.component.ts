import { Component, Inject, OnInit } from '@angular/core';
import { IProvince } from '../../models/province';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ICountry } from '../../models/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-user-province-dialog',
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-province-dialog.component.html',
  styleUrl: './user-province-dialog.component.css'
})
export class UserProvinceDialogComponent implements OnInit {
  form:FormGroup;
  isEditMode:boolean;
  countries: ICountry[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<UserProvinceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IProvince,
    private countryService: CountryService
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id: [data.id || null],
      provinceName: [data.provinceName || '', []],
      countryId: [data.countryId || null, []]
    })
  }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
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
