import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'confirm-dialog',
  template: `
    <h2 mat-dialog-title>Confirm Action</h2>
    <mat-dialog-content>
      <p>{{ data.message }}</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>No</button>
      <button mat-flat-button color="primary" [mat-dialog-close]="true">Yes</button>
    </mat-dialog-actions>
  `,
  imports: [MatDialogModule]
})
export class RptasUtilityPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<RptasUtilityPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}
}