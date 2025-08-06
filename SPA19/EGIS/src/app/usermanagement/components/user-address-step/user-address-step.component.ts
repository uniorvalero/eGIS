import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAddress } from '../../models/address';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressService } from '../../services/address.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { country, CountryService } from '../../services/country.service';
import { city, CityService } from '../../services/city.service';
import { province, ProvinceService } from '../../services/province.service';
import { barangay, BarangayService } from '../../services/barangay.service';
import { MatSelectModule } from "@angular/material/select";


@Component({
  selector: 'app-user-address-step',
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-address-step.component.html',
  styleUrl: './user-address-step.component.css'
})
export class UserAddressStepComponent implements OnInit {
  form: FormGroup;

  @Input() email: string = '';
  @Input() userId: number = 0;
  @Input() address: any = {};
  @Output() addressChange = new EventEmitter<IAddress | null>();
  @Output() addressSaved = new EventEmitter<IAddress | null>();

  cities: city[] = [];
  provinces: province[] = [];
  barangays: barangay[] = [];
  countries: country[] = [];
  selectedCountry: country | null = null;

  constructor(private addressService: AddressService, private snackBar: MatSnackBar,
    private countryService: CountryService, private cityService: CityService,
    private provinceService: ProvinceService, private barangayService: BarangayService,
    private fb: FormBuilder)
    {
      this.form = this.fb.group({
        addressLine1: [''],
        buildingName: [''],
        houseNo: [''],
        subdivision: [''],
        countryId: [null],
        cityId: [null],
        provinceId: [null],
        barangayId: [null]
      });
    }
  ngOnInit() {
    this.countryService.getCountries().subscribe(countries => this.countries = countries);

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
  
  // loadCountries() {
  //   this.countryService.getCountries().subscribe(countries => {
  //     this.countries = countries;
  //   });
  // }
  // onSelectedCountry(countryId: number): void {
  //   const country = this.countries.find(c => c.id === countryId);
  //   this.selectedCountry = country || null;
  //   this.address.countryId = this.selectedCountry?.id || null;
  // }
  // loadCities() {
  //   this.cityService.getCities().subscribe(cities => {
  //     this.cities = cities;
  //   });
  // }
  // onSelectedCity(cityId: number): void {
  //   const city = this.cities.find(c => c.id === cityId);
  //   this.address.cityId = city?.id || null;
  // }
  // loadProvinces() {
  //   this.provinceService.getProvinces().subscribe(provinces => {
  //     this.provinces = provinces;
  //   });
  // }
  // onSelectedProvince(provinceId: number): void {
  //   const province = this.provinces.find(p => p.id === provinceId);
  //   this.address.provinceId = province?.id || null;
  // }
  // loadBarangays() {
  //   this.barangayService.getBarangays().subscribe(barangays => {
  //     this.barangays = barangays;
  //   });
  // }
  // onSelectedBarangay(barangayId: number): void {
  //   const barangay = this.barangays.find(b => b.id === barangayId);
  //   this.address.barangayId = barangay?.id || null;
  // }

  onSave() {
    const addressData: IAddress = this.form.value;
    this.address = {
      ...addressData,
      userId: this.userId
    };
    this.addressService.createAddress(this.address).subscribe({
      next: (res) => {
        this.snackBar.open('Address saved successfully!', 'Close', { duration: 3000 });
        this.addressSaved.emit(res); // Notify parent to advance tab
      },
      error: (err) => {
        this.snackBar.open('Failed to save address: ' + (err.error || err.message), 'Close', { duration: 3000 });
      }
    });
  }

  ngOnChanges() {
    this.addressChange.emit(this.address);
  }
}
