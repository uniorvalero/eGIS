import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  styleUrls: ['./tax-due-dialog.component.css'],
  selector: 'app-tax-due-dialog',
  standalone: true, // if using standalone components
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  template: `
    <h2 mat-dialog-title>Compute Tax Due</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <mat-form-field>
        <mat-label>Base Amount</mat-label>
        <input matInput formControlName="baseAmount" required>
      </mat-form-field>
      <mat-radio-group formControlName="type">
        <mat-radio-button value="quarterly">Quarterly</mat-radio-button>
        <mat-radio-button value="annually">Annually</mat-radio-button>
      </mat-radio-group>
      <div class="dialog-actions">
        <button mat-button type="button" (click)="onCancel()">Cancel</button>
        <button mat-raised-button color="primary" type="submit" [disabled]="!form.valid">Compute</button>
      </div>
    </form>
  `
})
export class TaxDueDialogComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TaxDueDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      baseAmount: [null, Validators.required],
      type: ['quarterly', Validators.required]
    });
  }

  onSubmit() {
    const { baseAmount, type } = this.form.value;
    let totalDue = 0;
    if (type === 'quarterly') {
      totalDue = baseAmount;
    } else {
      totalDue = baseAmount * 4; // Assuming annual is 4 times the quarterly
    }
    console.log('Computed Total Due:', totalDue);
    this.dialogRef.close(totalDue);
  }

  onCancel() {
    this.dialogRef.close();
  }
}