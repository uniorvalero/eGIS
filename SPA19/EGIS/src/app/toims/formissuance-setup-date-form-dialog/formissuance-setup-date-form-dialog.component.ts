import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-formissuance-setup-date-form-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-US' }, ],
  templateUrl: './formissuance-setup-date-form-dialog.component.html',
  styleUrl: './formissuance-setup-date-form-dialog.component.css'
})
export class FormissuanceSetupDateFormDialogComponent implements OnInit {
  format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
    return date.toDateString();
  }
  selectedDate!: Date;
  selectedForm!: string;
  forms = ['Form 1', 'Form 2', 'Form 3', 'Form 4', 'Form 5'];
  
  constructor(
    private dialogRef: MatDialogRef<FormissuanceSetupDateFormDialogComponent>
  ) {}

  ngOnInit(): void {}

  onSave(): void {
    const result = {
      date: this.selectedDate,
      form: this.selectedForm,
    };
    console.log('Selected Date:', this.selectedDate);
    console.log('Selected Form:', this.selectedForm);
    this.dialogRef.close(result);
  }

  onCancel():void{
    this.dialogRef.close();
  }
}
