import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IMasterSubcode } from '../models/mastersubcode';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MastercodeService } from '../services/mastercode.service';
import { IMastercode } from '../models/mastercode';

@Component({
  selector: 'app-master-sub-code-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
  ],
  templateUrl: './master-sub-code-dialog.component.html',
  styleUrl: './master-sub-code-dialog.component.css'
})
export class MasterSubCodeDialogComponent  implements OnInit {

  form:FormGroup;
  isEditMode:boolean;
  masterCodeData :IMastercode[]=[];
  mastercodeSelected: string='';

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<MasterSubCodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IMasterSubcode,
    private mastercodeService: MastercodeService
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id:[data.id],
      code:[this.mastercodeSelected],
      subcode:[data.subcode],
      description:[data.description],
    })
  }

  ngOnInit(): void {
    this.mastercodeService.getMasteCodes().subscribe(masterCodes => {
      this.masterCodeData = masterCodes;
      if (this.isEditMode) {
        this.mastercodeSelected = this.data.code.toString();
        this.form.patchValue({
          code: this.mastercodeSelected,
          subcode: this.data.subcode,
          description: this.data.description
        });
      }
    });
  }

  onSelectionChange(event: MatSelectChange){
    this.mastercodeSelected = event.value;
    this.form.patchValue({
      code: this.mastercodeSelected
    });
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
