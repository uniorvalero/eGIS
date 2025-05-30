import { Component, OnInit, ViewChild } from '@angular/core';
import { IOfficialReceiptDetail } from '../models/officialreceiptdetail';
import { OfficialreceipttransactiondetailsService } from '../services/officialreceipttransactiondetails.service';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OfficialreceipttransactionDetailsDialogComponent } from '../officialreceipttransaction-details-dialog/officialreceipttransaction-details-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-officialreceipttransaction-details',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './officialreceipttransaction-details.component.html',
  styleUrl: './officialreceipttransaction-details.component.css'
})
export class OfficialreceipttransactionDetailsComponent implements OnInit {
  orNumber!: number;
  orPayor!: string;
  showORDetails: boolean = false;

  displayedColumns: string[] = ['receiptNumber', 'code', 'description', 'amount', 'actions'];
  dataSource!: MatTableDataSource<IOfficialReceiptDetail>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IOfficialReceiptDetail>;

  constructor(private route: ActivatedRoute, private orDetailService: OfficialreceipttransactiondetailsService, private dialog: MatDialog, private router: Router){
  }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.orNumber = params['receiptNumber'];
      this.orPayor = params['payor'];
      this.orDetailService.getOfficialReceiptDetails(this.orNumber).subscribe({
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
    this.orDetailService.getOfficialReceiptDetails(this.orNumber).subscribe((mscodes) =>
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

  openDialog(msCode?:IOfficialReceiptDetail):void{
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
  
  deleteOfficialReceiptDetails(id:number){
    if(confirm('Are you sure you want to delete this official receipt detail?')){
      this.orDetailService.deleteOfficialReceiptDetail(id).subscribe(()=>{
        this.loadOfficialReceiptDetails();
      })
    }
  }

  goToOfficialReceipt(): void {
    this.router.navigate(['/mainlayout/officialreceipt']);
    this.showORDetails = true; 
  }
}
