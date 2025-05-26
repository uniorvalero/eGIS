import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IInquiry } from '../models/inquiry';
import { InquirytransactionService } from '../services/inquirytransaction.service';
// Make sure to import or define IInquiry interface

@Component({
  selector: 'app-inquirytransaction',
  imports: [
    CommonModule,
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './inquirytransaction.component.html',
  styleUrl: './inquirytransaction.component.css'
})
  export class InquirytransactionComponent implements OnInit{

  showOR = false;
  selectedORId!: number;
  selectedDescription!: string;

  displayedColumns: string[] = ['orNumber', 'char', 'payor', 'particular', 'remarks', 'bookNumber', 'issuingTeller', 'issuingDate', 'verificationDetail', 'validity', 'formNumber'];
  dataSource!: MatTableDataSource<IInquiry>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IInquiry>;

  constructor(private inquirytransactionService: InquirytransactionService){
  }

  ngOnInit(): void {
    this.loadInquiryTransaction();
  }

  loadInquiryTransaction(): void{
    this.inquirytransactionService.getInquiryList().subscribe((mcodes) =>
      {   
         this.dataSource = new MatTableDataSource(mcodes);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
      });
  }

  applyFilter(event:Event): void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
