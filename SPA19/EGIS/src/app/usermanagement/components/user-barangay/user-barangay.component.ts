import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IBarangay } from '../../models/barangay';
import { BarangayService } from '../../services/barangay.service';
import { UserBarangayDialogComponent } from '../user-barangay-dialog/user-barangay-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-barangay',
  imports: [
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './user-barangay.component.html',
  styleUrl: './user-barangay.component.css'
})
export class UserBarangayComponent implements OnInit {
  barangays: IBarangay[] = [];

  displayedColumns: string[] = ['barangayName', 'zipCode', 'cityId','actions'];
  dataSource!: MatTableDataSource<IBarangay>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IBarangay>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router, private barangayService: BarangayService, private dialog: MatDialog){
  }

  ngOnInit() : void {
    this.loadBarangays();
  }

  loadBarangays(): void {
    this.barangayService.getBarangays().subscribe((barangays) => {
      this.dataSource = new MatTableDataSource(barangays);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openDialog(mCode?:IBarangay):void{
    const dialogRef=this.dialog.open(UserBarangayDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.barangayService.updateBarangay(result).subscribe(()=>{
            this.loadBarangays();
          });
        } else{
          this.barangayService.createBarangay(result).subscribe(()=>{
            this.loadBarangays();
          });
        }
      }
    })
  }

  deleteBarangay(barangay: IBarangay) {
    if (confirm(`Delete barangay ${barangay.barangayName}?`)) {
      this.barangayService.deleteBarangay(barangay.id).subscribe(() => this.loadBarangays());
    }
  }
}
