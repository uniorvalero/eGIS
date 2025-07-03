import { Component, Inject, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AssessmentService } from '../../services/assessment.service';
import { PaymentService } from '../../services/payment.service';
import { PropertyService } from '../../services/property.service';
import { TaxComputationService } from '../../services/tax-computation.service';
import { UsersService } from '../../services/users.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payments-ledgers-dialog',
  imports: [
    CommonModule,
  ],
  templateUrl: './payments-ledgers-dialog.component.html',
  styleUrl: './payments-ledgers-dialog.component.css'
})
export class PaymentsLedgersDialogComponent implements OnInit {
  ledger: any = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public payment: any,
    private usersService: UsersService,
    private propertyService: PropertyService,
    private assessmentService: AssessmentService,
    private taxComputationService: TaxComputationService
  ) {}

  ngOnInit(): void {
    this.loadLedger();
  }

  loadLedger(): void {
    const payerId = this.payment.payerId;
    const taxId = this.payment.taxId;
    const paymentId = this.payment.id;

    forkJoin({
      user: this.usersService.getUserById(payerId),
      property: this.propertyService.getPropertyById(taxId),
      assessment: this.assessmentService.getAssessmentById(taxId),
      taxComputation: this.taxComputationService.getTaxByPaymentId(paymentId)
    }).subscribe(({ user, property, assessment, taxComputation }) => {
      this.ledger = {
        user,
        property,
        assessment,
        taxComputation,
        payment: this.payment
      };
    });
  }
}
