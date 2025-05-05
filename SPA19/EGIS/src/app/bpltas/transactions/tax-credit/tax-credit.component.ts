import { Component, OnInit, ViewChild } from '@angular/core';
import { ITaxCredit } from '../models/taxcredit';
import { TaxcreditService } from '../services/taxcredit.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';

@Component({
  selector: 'app-tax-credit',
  imports: [
    //MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    //MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './tax-credit.component.html',
  styleUrl: './tax-credit.component.css'
})
export class TaxCreditComponent implements OnInit {
  dataSource!: MatTableDataSource<ITaxCredit>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<ITaxCredit>;

  constructor(private taxcreditService: TaxcreditService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadTaxCredit();
  }

  loadTaxCredit(): void{
    this.taxcreditService.getTaxCredits().subscribe((mcodes) =>
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
