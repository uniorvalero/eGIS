import { Component, Inject, OnInit } from '@angular/core';
import { IMenu } from '../../models/menu';
import { IApp } from '../../models/app';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-menu-dialog',
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-menu-dialog.component.html',
  styleUrl: './user-menu-dialog.component.css'
})
export class UserMenuDialogComponent implements OnInit {
  form:FormGroup;
  isEditMode:boolean;
  apps: IApp[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<UserMenuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IMenu,
    private appService: AppService
  )
  {
    this.isEditMode=!!data.id;
    this.form=this.fb.group({
      id: [data.id || null],
      menuName: [data.menuName || '', []],
      appId: [data.appId || null, []]
    })
  }

  ngOnInit(): void {
    this.appService.getApps().subscribe(apps => {
      this.apps = apps;
    });
  }

  onSubmit():void{
    if(this.form.valid){
      console.log('Form submitted:', this.form.value);
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel():void{
    this.dialogRef.close();
  }
}
