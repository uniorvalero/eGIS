import { Component, Inject, OnInit } from '@angular/core';
import { ICity } from '../../models/city';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ProvinceService } from '../../services/province.service';
import { IProvince } from '../../models/province';

@Component({
  selector: 'app-user-city-dialog',
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-city-dialog.component.html',
  styleUrl: './user-city-dialog.component.css'
})
export class UserCityDialogComponent implements OnInit {
  form:FormGroup;
  isEditMode:boolean;
  provinces: IProvince[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<UserCityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:ICity,
    private provinceService: ProvinceService
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id: [data.id || null],
      cityName: [data.cityName || '', []],
      provinceId: [data.provinceId || null, []],
    })
  }
  ngOnInit(): void {
    this.provinceService.getProvinces().subscribe(provinces => {
      this.provinces = provinces;
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
