import { Component, Inject, OnInit } from '@angular/core';
import { IBarangay } from '../../models/barangay';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ICity } from '../../models/city';
import { CityService } from '../../services/city.service';


@Component({
  selector: 'app-user-barangay-dialog',
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule],
  templateUrl: './user-barangay-dialog.component.html',
  styleUrl: './user-barangay-dialog.component.css'
})
export class UserBarangayDialogComponent implements OnInit {
  form:FormGroup;
  isEditMode:boolean;
  cities: ICity[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<UserBarangayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IBarangay,
    private cityService: CityService,
  ) 
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id: [data.id || null],
      barangayName: [data.barangayName || '', []],
      zipCode: [data.zipCode || '', []],
      cityId: [data.cityId || null, []],
    })
  }
  
  ngOnInit(): void {
    this.cityService.getCities().subscribe(cities => {
      this.cities = cities;
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
