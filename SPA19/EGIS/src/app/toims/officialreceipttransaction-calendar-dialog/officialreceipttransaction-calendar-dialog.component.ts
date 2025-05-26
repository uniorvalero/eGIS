import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import { provideNativeDateAdapter} from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { IOfficialReceipt } from '../models/officialreceipt';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-officialreceipttransaction-calendar-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './officialreceipttransaction-calendar-dialog.component.html',
  styleUrl: './officialreceipttransaction-calendar-dialog.component.css'
})
export class OfficialreceipttransactionCalendarDialogComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<OfficialreceipttransactionCalendarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IOfficialReceipt
  ) 
  {
  this.form = this.fb.group({
    id: [data.id],
    dateFrom: [null, Validators.required],
    dateTo: [null, Validators.required],
    formCode: ['', Validators.required]
  });
    console.log('OfficialReceiptTransactionCalendarDialogComponent data:', data);
  }
  onSubmit() {
    if (this.form.valid) {
      const filterData = this.form.value;
      // Pass the filter data back to the parent component
      this.dialogRef.close(filterData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
