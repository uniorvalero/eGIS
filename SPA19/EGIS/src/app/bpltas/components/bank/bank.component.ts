import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IBPLTASBank } from '../../models/bpltasbank';
import { BpltasbankService } from '../../services/bpltasbank.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-bank',
  imports: [MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CommonModule],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})
export class BankComponent implements OnInit {
  showSubCode = false;
  selectedMasterCode!: number;
  selectedDescription!: string;

  displayedColumns: string[] = ['bankName', 'bankCode', 'branch', 'address', 'actions'];
  dataSource!: MatTableDataSource<IBPLTASBank>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IBPLTASBank>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private bpltasbankService: BpltasbankService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadBanks();
  }

  loadBanks(): void{
    this.bpltasbankService.getBanks().subscribe((mcodes) =>
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

  openDialog(mCode?:IBPLTASBank):void{
    const dialogRef=this.dialog.open(UserDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.bpltasbankService.updateBank(result).subscribe(()=>{
            this.loadBanks();
          });
        } else{
          this.bpltasbankService.createBank(result).subscribe(()=>{
            this.loadBanks();
          });
        }
      }
    })
  }
  deleteBank(id:number){
    if(confirm('Are you sure you want to delete this bank?')){
      this.bpltasbankService.deleteBank(id).subscribe(()=>{
        this.loadBanks();
      })
    }
  }
}
