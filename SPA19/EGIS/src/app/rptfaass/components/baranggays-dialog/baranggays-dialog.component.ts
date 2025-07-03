import { Component, Inject } from '@angular/core';
import { IBaranggay } from '../../models/baranggay';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-baranggays-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule
  ],
  templateUrl: './baranggays-dialog.component.html',
  styleUrl: './baranggays-dialog.component.css'
})
export class BaranggaysDialogComponent {
  form:FormGroup;
  isEditMode:boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<BaranggaysDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IBaranggay
  )
  {
    this.isEditMode=!!data.baranggayId;
    this.form=this.fb.group({
      baranggayId:[data.baranggayId],
      name:[data.name || '', []],
      zoneNo:[data.zoneNo || '', []],
      city:[data.city || '', []],
      province:[data.province || '', []]
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
