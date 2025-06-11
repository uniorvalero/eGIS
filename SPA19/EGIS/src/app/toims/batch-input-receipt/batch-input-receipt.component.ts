import { Component, OnInit, ViewChild } from '@angular/core';
import { IBatchReceipt } from '../models/batchreceipt';
import { BatchreceiptService } from '../services/batchreceipt.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { BatchInputReceiptDialogComponent } from '../batch-input-receipt-dialog/batch-input-receipt-dialog.component';

@Component({
  selector: 'app-batch-input-receipt',
  imports: [
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './batch-input-receipt.component.html',
  styleUrl: './batch-input-receipt.component.css'
})
export class BatchInputReceiptComponent implements OnInit {
  displayedColumns: string[] = ['accountCode', 'description','amount','actions']
  dataSource!: MatTableDataSource<IBatchReceipt>;
  
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IBatchReceipt>;

  constructor(private router: Router, private batchreceiptService: BatchreceiptService, private dialog: MatDialog){
  }

  ngOnInit(): void {
  }

  loadBatchReceipt(): void{
  }

  updateBatchProcess(row: IBatchReceipt): void {
    this.batchreceiptService.updateBatchReceipt(row).subscribe((receipts) => {
      // this.dataSource = new MatTableDataSource(receipts);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      this.loadBatchReceipt();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BatchInputReceiptDialogComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.batchreceiptService.createBatchReceipt(result).subscribe(() => {
          this.loadBatchReceipt();
        });
      }
    });
  }
}
