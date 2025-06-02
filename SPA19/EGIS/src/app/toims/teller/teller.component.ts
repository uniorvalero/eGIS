import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ITeller } from '../models/teller';
import { MatSort } from '@angular/material/sort';
import { TellerService } from '../services/teller.service';
import { MatDialog } from '@angular/material/dialog';
import { TellerDialogComponent } from '../teller-dialog/teller-dialog.component';

@Component({
  selector: 'app-teller',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './teller.component.html',
  styleUrl: './teller.component.css'
})

export class TellerComponent implements OnInit {

  displayedColumns: string[] = ['code','userId','designation', 'name','actions']
  dataSource!: MatTableDataSource<ITeller>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<ITeller>;

  constructor(private tellerService: TellerService,
               private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadTeller();
  }

  loadTeller(): void{
    this.tellerService.getTellers().subscribe((data) =>
      {   
         this.dataSource = new MatTableDataSource(data);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
      });
  }

   applyFilter(event:Event): void{
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
  
    openDialog(tellerdata?:ITeller):void{
      const dialogRef=this.dialog.open(TellerDialogComponent,{
        data:tellerdata || {}
      });
      dialogRef.afterClosed().subscribe(result=>{
        if(result){
          if(result.id){
            this.tellerService.updateTeller(result).subscribe(()=>{
              this.loadTeller();
            });
          } else{
            this.tellerService.createTeller(result).subscribe(()=>{
              this.loadTeller();
            });
          }
        }
      })
    }
  
    deleteTeller(id:number){
      if(confirm('Are you sure you want to delete this teller?')){
        this.tellerService.deleteTeller(id).subscribe(()=>{
          this.loadTeller();
        })
      }
    }

}
