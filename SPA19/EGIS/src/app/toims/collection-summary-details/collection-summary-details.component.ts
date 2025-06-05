import { Component, OnInit, ViewChild } from '@angular/core';
import { ICollectionSummaryDetails } from '../models/collectionsummarydetails';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CollectionsummarydetailsService } from '../services/collectionsummarydetails.service';

@Component({
  selector: 'app-collection-summary-details',
  imports: [
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './collection-summary-details.component.html',
  styleUrl: './collection-summary-details.component.css'
})
export class CollectionSummaryDetailsComponent implements OnInit {
  selectedCode!: string;
  // selectedMonth: number;
  // selectedYear: number;

  displayedColumns: string[] = ['code', 'description', 'beginningBalance', 'amount', 'actual', 'actions'];
  dataSource!: MatTableDataSource<ICollectionSummaryDetails>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<ICollectionSummaryDetails>;

  constructor(private route: ActivatedRoute, 
    private collectionSummaryDetailsService: CollectionsummarydetailsService){}
    
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedCode = params['code'];
      // this.selectedMonth = +params['month'];
      // this.selectedYear = +params['year'];

      this.loadCollectionSummaryDetails();
    });
  }
  loadCollectionSummaryDetails(): void {
    //this.collectionSummaryDetailsService.getCollectionByCodeMonthYear(this.selectedCode, this.selectedMonth, this.selectedYear).subscribe((data) => {
      // this.dataSource = new MatTableDataSource(data);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    // });
  }
}
