import { Component, Inject, OnInit } from '@angular/core';
import { IAddress } from '../../models/address';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BarangayService } from '../../services/barangay.service';
import { CityService } from '../../services/city.service';
import { CountryService } from '../../services/country.service';
import { ProvinceService } from '../../services/province.service';

@Component({
  selector: 'app-user-address-dialog',
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  templateUrl: './user-address-dialog.component.html',
  styleUrl: './user-address-dialog.component.css'
})
export class UserAddressDialogComponent implements OnInit {
  form:FormGroup;
  isEditMode:boolean;
  countries: any[] = [];
  provinces: any[] = [];
  cities: any[] = [];
  barangays: any[] = [];
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<UserAddressDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IAddress,
    private countryService: CountryService,
    private provinceService: ProvinceService,
    private cityService: CityService,
    private barangayService: BarangayService
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id: [data.id || null],
      addressLine1: [data.addressLine1 || '', []],
      buildingName: [data.buildingName || '', []],
      houseNo: [data.houseNo || '', []],
      subdivision: [data.subdivision || '', []],
      countryId: [data.countryId || null, []],
      provinceId: [data.provinceId || null, []],
      cityId: [data.cityId || null, []],
      barangayId: [data.barangayId || null, []],
    })
  }

  ngOnInit() {
    this.countryService.getCountries().subscribe(countries => this.countries = countries);

    // Listen for changes and cascade
    this.form.get('countryId')?.valueChanges.subscribe(countryId => {
      this.provinceService.getProvinces().subscribe(provinces => this.provinces = provinces);
      this.cities = [];
      this.barangays = [];
      this.form.patchValue({ provinceId: null, cityId: null, barangayId: null });
    });

    this.form.get('provinceId')?.valueChanges.subscribe(provinceId => {
      this.cityService.getCities().subscribe(cities => this.cities = cities);
      this.barangays = [];
      this.form.patchValue({ cityId: null, barangayId: null });
    });

    this.form.get('cityId')?.valueChanges.subscribe(cityId => {
      this.barangayService.getBarangays().subscribe(barangays => this.barangays = barangays);
      this.form.patchValue({ barangayId: null });
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
