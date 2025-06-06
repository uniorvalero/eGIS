import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { PostingRecordConfirmDialogComponent } from '../posting-record-confirm-dialog/posting-record-confirm-dialog.component';

@Component({
  selector: 'app-posting-record',
  imports: [
    MatSelectModule,
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormField,
    MatInputModule,
    MatTableModule
  ],
  templateUrl: './posting-record.component.html',
  styleUrl: './posting-record.component.css'
})
export class PostingRecordComponent implements OnInit {
  selectedDate!: Date;
  selectedMonth: number = new Date().getMonth() + 1; 
  selectedYear: number = new Date().getFullYear();   
  years: number[] = [];
  months = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 }
  ];

  constructor(private dialog: MatDialog){}

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y >= 2000; y--) {
      this.years.push(y);
    }
  }

  processMonthlyPosting() {
    const dialogRef = this.dialog.open(PostingRecordConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

}
