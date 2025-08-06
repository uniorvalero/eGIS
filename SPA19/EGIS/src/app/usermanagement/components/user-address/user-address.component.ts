import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IAddress } from '../../models/address';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { AddressService } from '../../services/address.service';
import { UserAddressDialogComponent } from '../user-address-dialog/user-address-dialog.component';

@Component({
  selector: 'app-user-address',
  imports: [
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './user-address.component.html',
  styleUrl: './user-address.component.css'
})
export class UserAddressComponent implements OnInit {
  addresses: IAddress[] = [];

  displayedColumns: string[] = ['addressLine1', 'buildingName', 'houseNo', 'subdivision',
    'countryId', 'provinceId', 'cityId', 'barangayId', 'userId','actions'];
  dataSource!: MatTableDataSource<IAddress>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;     
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IAddress>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router, private addressService: AddressService, private dialog: MatDialog){
  }

  ngOnInit() : void {
    this.loadAddresses();
  }

  loadAddresses(): void {
    this.addressService.getAddresses().subscribe((addresses) => {
      this.dataSource = new MatTableDataSource(addresses);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openDialog(mCode?:IAddress):void{
      const dialogRef=this.dialog.open(UserAddressDialogComponent,{
        data:mCode || {}
      });
      dialogRef.afterClosed().subscribe(result=>{
        if(result){
          if(result.id){
            this.addressService.updateAddress(result).subscribe(()=>{
              this.loadAddresses();
            });
          } else{
            this.addressService.createAddress(result).subscribe(()=>{
              this.loadAddresses();
            });
          }
        }
      })
    }

  deleteAddress(address: IAddress) {
    if (confirm(`Delete address ${address.addressLine1}?`)) {
      this.addressService.deleteAddress(address.id).subscribe(() => this.loadAddresses());
    }
  }
}
