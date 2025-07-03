import { Component, Inject, OnInit } from '@angular/core';
import { IProperty } from '../../models/property';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectChange, MatSelectModule } from '@angular/material/select';
import { User, UsersService } from '../../services/users.service';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-property-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSelect
  ],
  templateUrl: './property-dialog.component.html',
  styleUrl: './property-dialog.component.css'
})
export class PropertyDialogComponent {
  form:FormGroup;
  isEditMode:boolean;
  userOwner: string = 'owner'; 
  users: User[] = [];
  selectedUser: User | null = null;
  clasificationOptions = [
    {name: 'Residential'},
    {name: 'Commercial'},
    {name: 'Industrial'},
    {name: 'Agricultural'}];

  propertyStatusOptions = [
    { value: true, label: 'Active' },
    { value: false, label: 'Inactive' }
  ];
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<PropertyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:IProperty,
    private usersService: UsersService
  )
  {
    this.isEditMode=!!data.propertyId;
    this.form=this.fb.group({
      taxDeclarationNo:[data.taxDeclarationNo],
      ownerId:[null],
      titleNo:[data.titleNo],
      classification:[this.clasificationOptions.find(option => option.name === data.classification)?.name || ''],
      location:[data.location ],
      landArea:[data.landArea ],
      propertyStatus: [data.propertyStatus ?? true], // default to true (Active)
    })
    this.loadOwner();
  }

  loadOwner() {
    this.usersService.getUserIDName(this.userOwner).subscribe(users => {
      this.users = users
    });
  }

  loadClassification() {
    this.form = this.fb.group({
      clasificationOptions: [this.data.classification]
    });
  }

  onSelectedOwner(userId: number): void {
    const user = this.users.find(u => u.id === userId);
    this.selectedUser = user || null; 
    this.form.patchValue({
      ownerId: userId
      
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
