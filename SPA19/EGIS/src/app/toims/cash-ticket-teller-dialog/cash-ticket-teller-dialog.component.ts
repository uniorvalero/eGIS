import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ITeller } from '../models/teller';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TellerService } from '../services/teller.service';
import { MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-cash-ticket-teller-dialog',
  imports: [
    MatTableModule,
    FormsModule
  ],
  templateUrl: './cash-ticket-teller-dialog.component.html',
  styleUrl: './cash-ticket-teller-dialog.component.css'
})
export class CashTicketTellerDialogComponent implements OnInit{
  displayedColumns: string[] = ['tellerCode', 'tellerName']
  dataSource!: MatTableDataSource<ITeller>;
  searchText = '';

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<ITeller>;

  constructor(private tellerService: TellerService, 
              private dialogRef: MatDialogRef<CashTicketTellerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dataSource = new MatTableDataSource<ITeller>([]);
  }
  ngOnInit() {
    this.loadTellers();
  }

  loadTellers() {
    this.tellerService.getTellers().subscribe((data) => {
      console.log('Teller data:', data); // <-- Add this
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  onCancel():void{
    this.dialogRef.close();
  }
}
