import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IOfficialReceipt } from '../models/officialreceipt';
import { MatSelectModule } from '@angular/material/select';
import { OfficialreceipttransactionService } from '../services/officialreceipttransaction.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-officialreceipttransaction-utility-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule 
  ],
  templateUrl: './officialreceipttransaction-utility-dialog.component.html',
  styleUrl: './officialreceipttransaction-utility-dialog.component.css'
})
export class OfficialreceipttransactionUtilityDialogComponent {
  form:FormGroup;
  displayedColumns: string[] = ['description', 'amount'];
  dataSource: any[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<OfficialreceipttransactionUtilityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IOfficialReceipt,
    private receiptService: OfficialreceipttransactionService // <-- Inject your API service
  )

  {
    this.form = this.fb.group({
      type: [''],
      startingRange: [''],
      endingRange: [''],
      character: ['']
    });
  }

  onProcess(): void {
    const filter = this.form.value;
    this.receiptService.getFilteredUtility(
      filter.type,
      filter.startingRange,
      filter.endingRange,
      filter.character
    ).subscribe(result => {
      this.dataSource = result;
    });
  }

  getTotalAmount(): string {
    if (!this.dataSource || this.dataSource.length === 0) return '';
    const total = this.dataSource.reduce((sum, item) => sum + (item.amount || 0), 0);
    return total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  
  onClose():void{
    this.dialogRef.close();
  }
}
