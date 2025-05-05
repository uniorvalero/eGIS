import { Component, OnInit, ViewChild } from '@angular/core';
import { ITransmital } from '../models/transmital';
import { TransmitalService } from '../services/transmital.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';

@Component({
  selector: 'app-transmital',
  imports: [
    //MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    //MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './transmital.component.html',
  styleUrl: './transmital.component.css'
})
export class TransmitalComponent implements OnInit {
  displayedColumns: string[] = ['accountno', 'description', 'taxdue', 'discount', 'penalty', 'totaldue', 'period', 'year'];
  dataSource!: MatTableDataSource<ITransmital>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<ITransmital>;

  constructor(private transmitalService: TransmitalService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadTransmital();
  }

  loadTransmital(): void{
    this.transmitalService.getTransmitals().subscribe((mcodes) =>
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