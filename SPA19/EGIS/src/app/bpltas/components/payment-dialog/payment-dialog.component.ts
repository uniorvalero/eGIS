import { ChangeDetectionStrategy, Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IBPLTASPayment } from '../../models/bpltaspayment';
import { BpltaspaymentService } from '../../services/bpltaspayment.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BPLTASUsers, BpltasuserService } from '../../services/bpltasuser.service';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../rptfaass/services/users.service';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { BpltasapplicationService } from '../../services/bpltasapplication.service';

@Component({
  selector: 'app-payment-dialog',
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
  templateUrl: './payment-dialog.component.html',
  styleUrl: './payment-dialog.component.css'
})
export class PaymentDialogComponent{
  form:FormGroup;
  isEditMode:boolean;
  paid: string = 'Paid';
  approved: string = 'Approved';
  pending: string = 'Pending';                                                                      
  applicationIds: number[] = [];
  statusOptions = [
    {name: 'Paid'},
    {name: 'Pending'},
    {name: 'Cancelled'}];
  paymentOptions = [
    {name: 'GCash'},
    {name: 'Online Bank Transfer'},
    {name: 'Cash'},
    {name: 'Check'},
    {name: 'Credit Card'},
    {name: 'Debit Card'},
    {name: 'Mobile Payment'},];
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<PaymentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IBPLTASPayment,
    private bpltasuserService: BpltasuserService, private bpltasapplicationService: BpltasapplicationService,
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      applicationId: [data.applicationId || '', []],
      receiptNo: [data.receiptNo || '', []],
      amount: [data.amount || 0],
      typesOfPayment: [data.typesOfPayment || ''],
      paymentDate: [data.paymentDate],
      status: [data.status || '']
    })
    this.loadApplicationIds();
  }

  loadApplicationIds() {
    this.bpltasapplicationService.getApplicationIds(this.approved).subscribe(ids => {
      this.applicationIds = ids;
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

