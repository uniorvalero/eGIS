import { Component, OnInit, ViewChild } from '@angular/core';
import { IOfficialReceiptDetails } from '../models/officialreceiptdetails';
import { OfficialreceipttransactiondetailsService } from '../services/officialreceipttransactiondetails.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IMasterSubcode } from '../models/mastersubcode';
import { OfficialreceipttransactionDetailsDialogComponent } from '../officialreceipttransaction-details-dialog/officialreceipttransaction-details-dialog.component';

@Component({
  selector: 'app-officialreceipttransaction-details',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
  ],
  templateUrl: './officialreceipttransaction-details.component.html',
  styleUrl: './officialreceipttransaction-details.component.css'
})
export class OfficialreceipttransactionDetailsComponent implements OnInit {
  receiptnumber!: number;
  payor!: string;
  showORDetails: boolean = false;

  displayedColumns: string[] = ['officialreceiptid','code','description', 'amount','actions']
  dataSource!: MatTableDataSource<IOfficialReceiptDetails>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IOfficialReceiptDetails>;

  constructor(private route: ActivatedRoute, private orDetailService: OfficialreceipttransactiondetailsService, private dialog: MatDialog, private router: Router){
  }

  ngOnInit(): void {
    console.log('ReceiptNumber:', this.receiptnumber, 'Payor:', this.payor);
    this.route.params.subscribe((params: Params) => {
      this.receiptnumber = params['receiptnumber'];
      this.payor = params['payor'];
      this.orDetailService.getOfficialReceiptDetails(this.receiptnumber).subscribe({
        next: (data) => {
          this.dataSource = new MatTableDataSource(data);
        },
        error: (err) => {
          console.error('Error fetching official receipt:', err);
        }
    });
    });
  }

  loadOfficialReceiptDetails(): void{
    this.orDetailService.getOfficialReceiptDetails(this.receiptnumber).subscribe((mscodes) =>
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

  openDialog(msCode?:IMasterSubcode):void{
    const dialogRef=this.dialog.open(OfficialreceipttransactionDetailsDialogComponent,{
      data:msCode || {}
    });
    
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.orDetailService.updateOfficialReceiptDetail(result).subscribe(()=>{
            this.loadOfficialReceiptDetails();
          });
        } else{
          this.orDetailService.createOfficialReceiptDetail(result).subscribe(()=>{
            this.loadOfficialReceiptDetails();
          });
        }
      }
    })
  }
  
  deleteMasterSubCode(id:number){
    if(confirm('Are you sure you want to delete this official receipt detail?')){
      this.orDetailService.deleteOfficialReceiptDetail(id).subscribe(()=>{
        this.loadOfficialReceiptDetails();
      })
    }
  }

  goToMasterCode(): void {
    this.router.navigate(['/mainlayout/officialreceipt']);
    this.showORDetails = true; 
  }
}
