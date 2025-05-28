import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { SetupBankDialogComponent } from '../setup-bank-dialog/setup-bank-dialog.component';
import { IBank } from '../models/bank';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-setup-bank',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './setup-bank.component.html',
  styleUrl: './setup-bank.component.css'
})
export class SetupBankComponent {
  displayedColumns: string[] = ['bankname', 'bankcode', 'actions'];
dataSource!: MatTableDataSource<IBank>;

@ViewChild(MatPaginator) paginator!:MatPaginator;
@ViewChild(MatSort) sort!:MatSort;
@ViewChild(MatTable) table!:MatTable<IBank>;

constructor(private bankService: BankService, private dialog: MatDialog){
}
ngOnInit(): void {
    this.loadBank();
}

loadBank(): void{
    this.bankService.getBanks().subscribe((mscodes) =>
    {   
        this.dataSource = new MatTableDataSource(mscodes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        
    });
}
applyFilter(event:Event): void{
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
    
    openDialog(msCode?:IBank):void{
        const dialogRef=this.dialog.open(SetupBankDialogComponent,{
        
        data:msCode || {}
        });
    
        
        dialogRef.afterClosed().subscribe(result=>{
        if(result){
            if(result.id){
            this.bankService.updateBank(result).subscribe(()=>{
                this.loadBank();
            });
            } else{
            this.bankService.createBank(result).subscribe(()=>{
                this.loadBank();
            });
            }
        }
        })
    
    }
    
    deleteBank(id:number){
        if(confirm('Are you sure you want to delete this Bank?')){
        this.bankService.deleteBank(id).subscribe(()=>{
            this.loadBank();
        })
        }
    }
}
