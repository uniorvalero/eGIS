import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { IFormIssuance } from '../models/formissuance';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form-issuance-setup-dialog',
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
    MatSelectModule
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form-issuance-setup-dialog.component.html',
  styleUrl: './form-issuance-setup-dialog.component.css'
})
export class FormIssuanceSetupDialogComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormIssuanceSetupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFormIssuance
  ) 
  {
  this.form = this.fb.group({
    id: [data.id],
    dateFrom: [null, Validators.required],
    dateTo: [null, Validators.required],
    formCode: ['', Validators.required]
  });
    
  }
  onSubmit() {
    if (this.form.valid) {
      const filterData = this.form.value;
      this.dialogRef.close(filterData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
