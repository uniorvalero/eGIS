import { Component, Inject, inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { ICollectionSummary } from '../models/collectionsummary';
import { CollectionsummaryService } from '../services/collectionsummary.service';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-collection-summary',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './collection-summary.component.html',
  styleUrl: './collection-summary.component.css'
})
export class CollectionSummaryComponent implements OnInit{
  showCS = false;
  selectedCode!: string;
  selectedMonth: number = new Date().getMonth() + 1; // default to current month
  selectedYear: number = new Date().getFullYear();   // default to current year
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

  displayedColumns: string[] = ['code', 'description', 'beginningBalance', 'amount', 'actual', 'actions'];
  dataSource!: MatTableDataSource<ICollectionSummary>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<ICollectionSummary>;
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  constructor(private router: Router, private collectionsummaryService: CollectionsummaryService, 
    private dialog: MatDialog){
  }

  ngOnInit(): void {
    // Populate years (e.g., from 2000 to current year)
    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y >= 2000; y--) {
      this.years.push(y);
    }
    this.loadCollectionSummaries();
  }

  loadCollectionSummaries(): void {
  // selectedMonth and selectedYear are now numbers
    this.collectionsummaryService.getCollectionByMonthYear(this.selectedMonth, this.selectedYear).subscribe((mcodes) => {   
    this.dataSource = new MatTableDataSource(mcodes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event:Event): void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openDetails(code: string, month: string, year: number): void {
    console.log(`Navigating to details for code: ${code}, month: ${month}, year: ${year}`);
    this.router.navigate([`/mainlayout/collectionsummary`, code, month, year]);
    this.selectedCode = code;
    this.selectedMonth = Number(month);
    this.selectedYear = year;
    this.showCS = true;
  }
}