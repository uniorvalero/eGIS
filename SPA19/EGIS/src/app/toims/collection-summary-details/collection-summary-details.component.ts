import { Component, OnInit, ViewChild } from '@angular/core';
import { ICollectionSummaryDetails } from '../models/collectionsummarydetails';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable, MatFooterCellDef } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionsummarydetailsService } from '../services/collectionsummarydetails.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-collection-summary-details',
  imports: [
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatFormField,
    MatPaginator,
    MatButtonModule,
    CommonModule,
    FormsModule,
    MatFooterCellDef
  ],
  templateUrl: './collection-summary-details.component.html',
  styleUrl: './collection-summary-details.component.css'
})

export class CollectionSummaryDetailsComponent implements OnInit {
  selectedCode!: string;
  selectedMonth!: number;
  selectedYear!: number;
  showSubCode: boolean = false;
  totalAmount = 0;

  displayedColumns: string[] = ['setDate', 'perDayAmount', 'actions'];
  dataSource!: MatTableDataSource<ICollectionSummaryDetails>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<ICollectionSummaryDetails>;

  constructor(private route: ActivatedRoute, private router: Router,
    private collectionSummaryDetailsService: CollectionsummarydetailsService){}
    
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedCode = params['code'];
      this.selectedMonth = +params['month'];
      this.selectedYear = +params['year'];
      // this.collectionSummaryDetailsService.getCollectionByCodeMonthYear(this.selectedCode, this.selectedMonth,
      //   this.selectedYear).subscribe({
      //   next: (data) => {
      //     this.dataSource = new MatTableDataSource(data);
      //   }
      // });
      this.loadCollectionSummaryDetails();
    });
  }

  loadCollectionSummaryDetails(): void {
    this.collectionSummaryDetailsService.getCollectionByCodeMonthYear(this.selectedCode, this.selectedMonth, 
      this.selectedYear).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.calculateTotals(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  calculateTotals(data: ICollectionSummaryDetails[]) {
    console.log('Calculating totals for data:', data);
      this.totalAmount = data.reduce((sum, row) => sum + (row.perDayAmount || 0), 0);
      console.log('Total Amount:', this.totalAmount);
    }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goToCollectionSummary(): void {
    this.router.navigate(['/mainlayout/collectionsummary']);
    this.showSubCode = true; 
  }

  deleteCollection(id:number){
    if(confirm('Are you sure you want to delete this Collection?')){
      this.collectionSummaryDetailsService.deleteCollection(id).subscribe(()=>{
        this.loadCollectionSummaryDetails();
      })
    }
  }
}
