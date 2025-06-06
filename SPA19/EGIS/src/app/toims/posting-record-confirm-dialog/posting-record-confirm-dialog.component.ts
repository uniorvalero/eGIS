import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-posting-record-confirm-dialog',
  imports: [
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './posting-record-confirm-dialog.component.html',
  styleUrl: './posting-record-confirm-dialog.component.css',
})
export class PostingRecordConfirmDialogComponent {

}
