import { Component } from '@angular/core';
import { IAddress } from '../../models/address';
import { IUser } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { AddressService } from '../../services/address.service';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
    userDetails: IUser = {
      firstName: '',
      middleName: '',
      lastName: '',
      age: 0,
      birthDate: new Date(),
      gender: '',
      status: '',
      isVerified: false,
      id: 0,
      contactNo: '',
      loginId: 0,
      profileImage: ''
    };
  address: IAddress = {
    id: 0,
    addressLine1: '',
    buildingName: '',
    houseNo: '',
    subdivision: '',
    countryId: 0,
    provinceId: 0,
    cityId: 0,
    barangayId: 0,
    userId: 0
  };

  constructor(private profileService: ProfileService,
              private userService: UserService,
              private addressService: AddressService
  ) {}

  onSubmit() {}
  // onSubmit() {
  // this.userService.createUser(this.userDetails).subscribe({
  //   next: (userRes) => {
  //     this.addressService.createAddress(this.address).subscribe({
  //       next: (addrRes) => {
  //         this.profileService.createUserProfile(userRes, addrRes).subscribe({
  //           next: (profileRes) => {
  //             // Handle successful profile creation
  //           },
  //           error: (err) => {
  //             // Handle error in profile creation
  //           }
  //         });
  //       },
  //       error: (err) => {
  //         // Error logic for address
  //       }
  //     });
  //   },
  //   error: (err) => {
  //     // Error logic for user
  //   }
  // });
//}
}
