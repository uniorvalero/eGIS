import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule, MatSelectChange } from '@angular/material/select';
import { IOfficialReceiptDetail } from '../models/officialreceiptdetail';
import { OfficialreceipttransactiondetailsService } from '../services/officialreceipttransactiondetails.service';

@Component({
  selector: 'app-officialreceipttransaction-details-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
  ],
  templateUrl: './officialreceipttransaction-details-dialog.component.html',
  styleUrl: './officialreceipttransaction-details-dialog.component.css'
})
export class OfficialreceipttransactionDetailsDialogComponent implements OnInit {
  form:FormGroup;
  isEditMode:boolean;
  orDetailsData :IOfficialReceiptDetail[]=[];
  orIdSelected: number=0;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<OfficialreceipttransactionDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IOfficialReceiptDetail,
    private orDetailService: OfficialreceipttransactiondetailsService
  ) 
  {
    this.isEditMode = !!data.id;
    this.form = this.fb.group({
      id: [data.id],
      receiptNumber: [this.orIdSelected],
      code: [data.code],
      description: [data.description],
      amount: [data.amount],
    });
  }

  ngOnInit(): void {
    
      this.loadORDetails();
  }

  onSelectionChange(event: MatSelectChange){
    this.orIdSelected = event.value;
    this.form.patchValue({
      receiptNumber: this.orIdSelected
    });
  }

  private loadORDetails() {
    this.orDetailService.getOfficialReceiptDetails(this.orIdSelected)
      .subscribe({
        next: (data) => {
          this.orDetailsData= data;
        }
      });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel():void{
    this.dialogRef.close();
  }
}
