import { Component, OnInit, ViewChild } from '@angular/core';
import { IApplicationRetirement } from '../models/applicationretirement';
import { ApplicationretirementService } from '../services/applicationretirement.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';

@Component({
  selector: 'app-applicationretirement',
  imports: [
    //MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    //MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './applicationretirement.component.html',
  styleUrl: './applicationretirement.component.css'
})
export class ApplicationretirementComponent implements OnInit {
  displayedColumns: string[] = ['accountno', 'description', 'taxdue', 'discount', 'penalty', 'totaldue', 'period', 'year'];
  dataSource!: MatTableDataSource<IApplicationRetirement>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IApplicationRetirement>;

  constructor(private applicationRetirementService: ApplicationretirementService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadApplicationRetirement();
  }

  loadApplicationRetirement(): void{
    this.applicationRetirementService.getApplicationRetirements().subscribe((mcodes) =>
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

  // openDialog(mCode?:IChecks):void{
  //   const dialogRef=this.dialog.open(BillingDialogComponent,{
     
  //     data:mCode || {}
  //   });

   
  //   dialogRef.afterClosed().subscribe(result=>{
  //     if(result){
  //       if(result.id){
  //         this.billingService.updateBilling(result).subscribe(()=>{
  //           this.loadBilling();
  //         });
  //       } else{
  //         this.billingService.createBilling(result).subscribe(()=>{
  //           this.loadBilling();
  //         });
  //       }
  //     }
  //   })
  // }

  // deleteBilling(id:number){
  //   if(confirm('Are you sure you want to delete this master table code?')){
  //     this.billingService.deleteBilling(id).subscribe(()=>{
  //       this.loadBilling();
  //     })
  //   }
  // }
}

