import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IOfficialReceipt } from '../models/officialreceipt';
import { IOfficialReceiptDetail } from '../models/officialreceiptdetail';
import { OfficialreceipttransactionService } from '../services/officialreceipttransaction.service';
import { OfficialreceipttransactiondetailsService } from '../services/officialreceipttransactiondetails.service';

@Component({
  selector: 'app-officialreceipttransaction-cancel-receipt-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './officialreceipttransaction-cancel-receipt-dialog.component.html',
  styleUrl: './officialreceipttransaction-cancel-receipt-dialog.component.css'
})
export class OfficialreceipttransactionCancelReceiptDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<OfficialreceipttransactionCancelReceiptDialogComponent>,
    private officialReceiptService: OfficialreceipttransactionService,
    private officialReceiptDetailsService: OfficialreceipttransactiondetailsService,
    @Inject(MAT_DIALOG_DATA) public data:IOfficialReceipt
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id:[data.id],
      receiptnumber:[data.receiptNumber],
      char:[data.char],
      payor:[data.payor],
    })

  }

  onSubmit():void{
    if (this.form.valid) {
      let OfficialReceiptDetails: IOfficialReceiptDetail = {
        ...this.form.value,
        description: "Cancelled Receipt",
        code: "0-00-0000-001"
      };

      let officialReceipt: IOfficialReceipt = {
        ...this.form.value,
        payor: "C A N C E L L E D",
      };
      
        this.officialReceiptService.updateOfficialReceipt(officialReceipt).subscribe(() => {
        this.officialReceiptDetailsService.cancelOfficialReceiptDetail(OfficialReceiptDetails.receiptNumber).subscribe(() => {
        });
      });
    }
  }

  onCancel():void{
    this.dialogRef.close();
  }
}
