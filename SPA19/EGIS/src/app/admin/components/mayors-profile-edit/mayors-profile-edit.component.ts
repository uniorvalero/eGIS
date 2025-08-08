import { Component, OnInit } from '@angular/core';
import { IMayor } from '../../models/mayor';
import { MayorsprofileService } from '../../services/mayorsprofile.service';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { NavbarComponent } from "../../../../shared/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { AddressService } from '../../../usermanagement/services/address.service';
import { IAddress } from '../../models/address';
import { IProfile } from '../../models/profile';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-mayors-profile-edit',
  templateUrl: './mayors-profile-edit.component.html',
  styleUrls: ['./mayors-profile-edit.component.css'],
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    CommonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule
]
})

export class MayorsProfileEditComponent implements OnInit {
  profileForm: FormGroup;
  mayor: IMayor | null = null;
  address: IAddress | null = null;
  profile: IProfile | null = null;
  selectedFile: File | null = null;
  userEditMode = false;
  addressEditMode = false;

  constructor(
    private fb: FormBuilder,
    private mayorsProfileService: MayorsprofileService,
    private addressService: AddressService
  ) {
    this.profileForm = this.fb.group({
      firstName: [{ value: '', disabled: !this.userEditMode }],
      middleName: [{ value: '', disabled: !this.userEditMode }],
      lastName: [{ value: '', disabled: !this.userEditMode }],
      age: [{ value: null, disabled: !this.userEditMode }],
      birthDate: [{ value: '', disabled: !this.userEditMode }],
      gender: [{ value: '', disabled: !this.userEditMode }],
      status: [{ value: '', disabled: !this.userEditMode }],
      isVerified: [{ value: false, disabled: !this.userEditMode }],
      contactNo: [{ value: '', disabled: !this.userEditMode }],
      profileImage: [''],
      addressLine1: [{ value: '', disabled: !this.addressEditMode }],
      buildingName: [{ value: '', disabled: !this.addressEditMode }],
      houseNo: [{ value: '', disabled: !this.addressEditMode }],
      subdivision: [{ value: '', disabled: !this.addressEditMode }],
      countryId: [{ value: null, disabled: !this.addressEditMode }],
      provinceId: [{ value: null, disabled: !this.addressEditMode }],
      cityId: [{ value: null, disabled: !this.addressEditMode }],
      barangayId: [{ value: null, disabled: !this.addressEditMode }]
    });
  }
  ngOnInit(): void {
    this.userEditMode = false; // Start in view mode

    this.mayorsProfileService.getMayorsProfile(2).subscribe(mayor => {
      console.log('Mayor:', mayor);
      this.mayor = mayor;

      // DO NOT enable controls here!
      this.profileForm.patchValue({
        firstName: mayor.firstName,
        middleName: mayor.middleName,
        lastName: mayor.lastName,
        age: mayor.age,
        birthDate: mayor.birthDate,
        gender: mayor.gender,
        status: mayor.status,
        isVerified: mayor.isVerified,
        contactNo: mayor.contactNo,
        // profileImage: mayor.profileImage
      });

      this.mayorsProfileService.getAddressByUserId(mayor.id).subscribe(address => {
        if (address) {
          this.address = address;
          this.profileForm.patchValue(address);
        } else {
          this.profileForm.patchValue({
            addressLine1: '',
            buildingName: '',
            houseNo: '',
            subdivision: '',
            countryId: null,
            provinceId: null,
            cityId: null,
            barangayId: null
          });
        }
      });
    });
  }

  initForm(mayor: IMayor): void {
    this.profileForm = this.fb.group({
      firstName: [{ value: mayor.firstName, disabled: !this.userEditMode }, Validators.required],
      middleName: [{ value: mayor.middleName, disabled: !this.userEditMode }],
      lastName: [{ value: mayor.lastName, disabled: !this.userEditMode }, Validators.required],
      age: [{ value: mayor.age, disabled: !this.userEditMode }, [Validators.required, Validators.min(0)]],
      birthDate: [{ value: mayor.birthDate, disabled: !this.userEditMode }, Validators.required],
      gender: [{ value: mayor.gender, disabled: !this.userEditMode }, Validators.required],
      status: [{ value: mayor.status, disabled: !this.userEditMode }, Validators.required],
      isVerified: [{ value: mayor.isVerified, disabled: !this.userEditMode }],
      contactNo: [{ value: mayor.contactNo, disabled: !this.userEditMode }, Validators.required],
      profileImage: [''],
      addressLine1: [{ value: this.address?.addressLine1 || '', disabled: !this.addressEditMode }],
      buildingName: [{ value: this.address?.buildingName || '', disabled: !this.addressEditMode }],
      houseNo: [{ value: this.address?.houseNo || '', disabled: !this.addressEditMode }],
      subdivision: [{ value: this.address?.subdivision || '', disabled: !this.addressEditMode }],
      countryId: [{ value: this.address?.countryId || null, disabled: !this.addressEditMode }],
      provinceId: [{ value: this.address?.provinceId || null, disabled: !this.addressEditMode }],
      cityId: [{ value: this.address?.cityId || null, disabled: !this.addressEditMode }],
      barangayId: [{ value: this.address?.barangayId || null, disabled: !this.addressEditMode }]
    });
  }

  enableUserEdit() {
    this.userEditMode = true;
    this.profileForm.get('firstName')?.enable();
    this.profileForm.get('middleName')?.enable();
    this.profileForm.get('lastName')?.enable();
    this.profileForm.get('age')?.enable();
    this.profileForm.get('birthDate')?.enable();
    this.profileForm.get('gender')?.enable();
    this.profileForm.get('status')?.enable();
    this.profileForm.get('isVerified')?.enable();
    this.profileForm.get('contactNo')?.enable();
  }

  saveUser() {
    this.userEditMode = false;
    this.profileForm.get('firstName')?.disable();
    this.profileForm.get('middleName')?.disable();
    this.profileForm.get('lastName')?.disable();
    this.profileForm.get('age')?.disable();
    this.profileForm.get('birthDate')?.disable();
    this.profileForm.get('gender')?.disable();
    this.profileForm.get('status')?.disable();
    this.profileForm.get('isVerified')?.disable();
    this.profileForm.get('contactNo')?.disable();
    
    if (this.profileForm.valid && this.mayor) {
      const userFields: IMayor = {
        id: this.mayor.id,
        firstName: this.profileForm.value.firstName,
        middleName: this.profileForm.value.middleName,
        lastName: this.profileForm.value.lastName,
        contactNo: this.profileForm.value.contactNo,
        age: this.profileForm.value.age,
        birthDate: this.profileForm.value.birthDate,
        gender: this.profileForm.value.gender,
        status: this.profileForm.value.status,
        isVerified: this.profileForm.value.isVerified,
        // Add other required IMayor properties if needed
      };
      this.mayorsProfileService.updateMayorsProfile(userFields).subscribe(() => {
        this.userEditMode = false;
        // Optionally reload data or show success
      });
    }
  }

  enableAddressEdit() {
    this.addressEditMode = true;
      this.profileForm.get('addressLine1')?.enable();
      this.profileForm.get('buildingName')?.enable();
      this.profileForm.get('houseNo')?.enable();
      this.profileForm.get('subdivision')?.enable();
      this.profileForm.get('countryId')?.enable();
      this.profileForm.get('provinceId')?.enable();
      this.profileForm.get('cityId')?.enable();
      this.profileForm.get('barangayId')?.enable();
  }

  saveAddress() {
    this.addressEditMode = false;
    this.profileForm.get('addressLine1')?.disable();
    this.profileForm.get('buildingName')?.disable();
    this.profileForm.get('houseNo')?.disable();
    this.profileForm.get('subdivision')?.disable();
    this.profileForm.get('countryId')?.disable();
    this.profileForm.get('provinceId')?.disable();
    this.profileForm.get('cityId')?.disable();
    this.profileForm.get('barangayId')?.disable();

    if (this.profileForm.valid && this.mayor && this.address) {
      const addressFields = {
        ...this.address,
        addressLine1: this.profileForm.value.addressLine1,
        buildingName: this.profileForm.value.buildingName,
        houseNo: this.profileForm.value.houseNo,
        subdivision: this.profileForm.value.subdivision,
        countryId: this.profileForm.value.countryId,
        provinceId: this.profileForm.value.provinceId,
        cityId: this.profileForm.value.cityId,
        barangayId: this.profileForm.value.barangayId
      };
      this.addressService.updateAddress(addressFields).subscribe(() => {
        this.addressEditMode = false;
        // Optionally reload data or show success
      });
    }
  }

  // onFileSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     this.selectedFile = input.files[0];
  //   }
  // }

  onSubmit(): void {
    if (this.profileForm.valid && this.mayor) {
      const updatedMayor: IMayor = { ...this.mayor, ...this.profileForm.value };
      //this.mayorsProfileService.updateMayorsProfile(
      //   updatedMayor.id,
      //   this.selectedFile ?? new File([], ""),
      // ).subscribe(() => {
        // Success logic (e.g., show a message or redirect)
      // }, error => {
      //   // Error logic
      // });
    }
  }

  // onImageUploaded(photo: Blob) {
  //   if (this.mayor) {
  //     // Convert Blob to File before passing to the service
  //     const file = new File([photo], "photo.png", { type: photo.type });
  //     this.mayorsProfileService.updateMayorsProfile(this.mayor.id, file, this.mayor).subscribe(response => {
  //       // Handle successful upload response
  //     }, error => {
  //       // Handle error response
  //     });
  //   }
  // }

  // loadMayorsInfo(): void {
  //   if (this.mayor && this.mayor.id) {
  //     this.mayorsProfileService.getMayorsProfile(this.mayor.id).subscribe(mayor => {
  //       this.mayor = mayor;
  //       this.profileForm.patchValue(mayor);
  //     });
  //   } else {
  //     // Handle case when mayor or mayor.id is not available
  //     // For example, you might want to fetch the mayor by another means or show an error
  //   }
  //   }
}
