import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { IUser } from '../../models/user';
import { IAddress } from '../../models/address';
import { CommonModule } from '@angular/common';
import { UserEmailVerificationStepComponent } from "../user-email-verification-step/user-email-verification-step.component";
import { UserAddressStepComponent } from "../user-address-step/user-address-step.component";
import { UserDetailsStepComponent } from '../user-details-step/user-details-step.component';
import { ActivatedRoute } from '@angular/router';
import { ILoginRequest } from '../../models/loginrequest';
import { NavbarComponent } from "../../../../shared/navbar/navbar.component";

@Component({
  selector: 'app-user-application-tabs',
  imports: [
    MatCardModule,
    MatTabsModule,
    CommonModule,
    UserDetailsStepComponent,
    UserEmailVerificationStepComponent,
    UserAddressStepComponent,
    NavbarComponent
],
  templateUrl: './user-application-tabs.component.html',
  styleUrls: ['./user-application-tabs.component.css']

})
export class UserApplicationTabsComponent implements OnInit {
  userDetails!: IUser;
  loginDetails!: ILoginRequest | null;
  address!: IAddress | null;
  email!: string;
  loginId!: number;
  selectedTabIndex = 0;
  userId: number = 0;
  isTab2Enabled = false;
  isTab3Enabled = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.loginId = Number(params['loginid']);
      this.email = params['email'];
      if (this.userDetails) {
        this.userDetails.loginId = this.loginId;
        this.loginDetails = { email: this.email } as ILoginRequest;
      }
    });
  }

  onUserDetailsSaved(details: any) {
    this.userId = details.id || details.userId; 
    this.selectedTabIndex = 1; 
    this.isTab2Enabled = true;
  }

  onAddressSaved(address: any) {
    this.selectedTabIndex = 2; 
    this.isTab3Enabled = true;
  }
}
