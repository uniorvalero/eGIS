import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { IPayment } from '../../models/payment';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User, UsersService } from '../../services/users.service';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { TaxComputationService } from '../../services/tax-computation.service';

@Component({
  selector: 'app-payments-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSelect
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './payments-dialog.component.html',
  styleUrl: './payments-dialog.component.css'
})
export class PaymentsDialogComponent {
  form:FormGroup;
  isEditMode:boolean;
  userPayer: string = 'Payer';
  userVerifier: string = 'Verifier';
  computted: string = 'Computted';
  pending: string = 'Pending';                                                                      
  users: User[] = [];
  verifiers: User[] = [];
  Taxes: number[] = [];
  selectedUser: User | null = null;
  selectedVerifier: User | null = null;
  clasificationOptions = [
    {name: 'GCash'},
    {name: 'Online Bank Transfer'},
    {name: 'Cash'},
    {name: 'Check'},
    {name: 'Credit Card'},
    {name: 'Debit Card'},
    {name: 'Mobile Payment'},];
  statusOptions = [
    {name: 'Paid'},
    {name: 'Pending'},
    {name: 'Cancelled'}];
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<PaymentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IPayment,
    private usersService: UsersService,
    private taxComputationService: TaxComputationService
  )
  {
    this.isEditMode=!!data.Id;
    this.form=this.fb.group({
      taxId: [null],
      payerId: [null],
      paymentDate: [data.paymentDate],
      amountPaid: [data.amountPaid || 0],
      paymentMethod: [data.paymentMethod || ''],
      receiptNo: [data.receiptNo || null],
      verifiedBy: [null],
      status: [data.status || '']
    })
    this.loadVerifiers();
    this.loadPayer();
    this.loadTax();
    this.loadPaymentMethod();
  }

  loadVerifiers() {
    this.usersService.getUserIDName(this.userVerifier).subscribe(verifiers => {
      this.verifiers = verifiers;
      if (this.data.verifiedBy) {
        this.onSelectedVerifier(this.data.verifiedBy);
      }
    });
  }

  loadPayer() {
    this.usersService.getUserIDName(this.userPayer).subscribe(users => {
      this.users = users
    });
  }

  loadTax() {
    this.taxComputationService.getAllApprovedTaxId(this.computted).subscribe(ids => {
      this.Taxes = ids
    });
  }

  loadPaymentMethod() {
    this.form.patchValue({
      paymentMethod: this.data.paymentMethod || ''
    });
  }

  onSelectedVerifier(userId: number): void {
    const user = this.verifiers.find(u => u.id === userId);
    this.selectedVerifier = user || null;
    this.form.patchValue({
      verifiedBy: userId
    });
  }

  onSelectedPayer(userId: number): void {
    const user = this.users.find(u => u.id === userId);
    this.selectedUser = user || null; 
    this.form.patchValue({
      payerId: userId
    });
  }

  onSubmit():void{
    const formValue = { ...this.form.value };
    if (this.form.valid) {
      if (formValue.paymentDate instanceof Date) {
        // Convert to yyyy-MM-dd for DateOnly
        const year = formValue.paymentDate.getFullYear();
        const month = String(formValue.paymentDate.getMonth() + 1).padStart(2, '0');
        const day = String(formValue.paymentDate.getDate()).padStart(2, '0');
        formValue.paymentDate = `${year}-${month}-${day}`;
      }
      this.dialogRef.close(formValue);
    }
  }

  onCancel():void{
    this.dialogRef.close();
  }
}
