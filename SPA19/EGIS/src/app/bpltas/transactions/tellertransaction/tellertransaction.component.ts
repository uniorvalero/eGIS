import { Component, OnInit, ViewChild } from '@angular/core';
import { ITeller } from '../../../toims/models/teller';
import { ITellerTransaction } from '../models/tellertransaction';
import { TellertransactionService } from '../services/tellertransaction.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';

@Component({
  selector: 'app-tellertransaction',
  imports: [
    //MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    //MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './tellertransaction.component.html',
  styleUrl: './tellertransaction.component.css'
})
export class TellertransactionComponent implements OnInit {
  displayedColumns: string[] = ['accountno', 'description', 'taxdue', 'discount', 'penalty', 'totaldue', 'period', 'year'];
  dataSource!: MatTableDataSource<ITellerTransaction>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<ITellerTransaction>;

  constructor(private tellerTransactionService: TellertransactionService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadTellerTransaction();
  }

  loadTellerTransaction(): void{
    this.tellerTransactionService.getTellerTransaction().subscribe((mcodes) =>
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