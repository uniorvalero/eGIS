import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ICheckReceivedDay } from '../models/checkreceivedday';
import { CommonModule, formatDate } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-check-received-day-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './check-received-day-dialog.component.html',
  styleUrl: './check-received-day-dialog.component.css'
})

export class CheckReceivedDayDialogComponent {
  form:FormGroup;
  isEditMode:boolean;
  
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<CheckReceivedDayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:ICheckReceivedDay
  )
  
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id:[data.id],
      receiptNumber:[data.receiptNumber || '',[Validators.required]],
      bankNumber:[data.bankNumber || '',[Validators.required]],
      bankName:[data.bankName || '',[Validators.required]],
      checkNumber:[data.checkNumber || '',[Validators.required]],
      checkAmount:[data.checkAmount || '',[Validators.required]],
      checkDate:[data.checkDate]
    })
  }

  onSubmit():void{
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
  }
  onCancel():void{
    this.dialogRef.close();
  }
}
