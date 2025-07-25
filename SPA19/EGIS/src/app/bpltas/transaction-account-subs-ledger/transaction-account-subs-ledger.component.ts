import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { IAccountLedger } from '../models/accountledger';
import { AccountsubsidiaryledgerService } from '../services/accountsubsidiaryledger.service';

@Component({
  selector: 'app-transaction-account-subs-ledger',
  imports: [
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './transaction-account-subs-ledger.component.html',
  styleUrl: './transaction-account-subs-ledger.component.css'
})
export class TransactionAccountSubsLedgerComponent implements OnInit {
  displayedColumns: string[] = ['accountno', 'description', 'taxdue', 'discount', 'penalty', 'totaldue', 'period', 'year'];
  dataSource!: MatTableDataSource<IAccountLedger>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IAccountLedger>;

  constructor(private accountSubsidiaryLedgerService: AccountsubsidiaryledgerService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadBusinessPermit();
  }

  loadBusinessPermit(): void{
    this.accountSubsidiaryLedgerService.getAccountLedgers().subscribe((mcodes) =>
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
