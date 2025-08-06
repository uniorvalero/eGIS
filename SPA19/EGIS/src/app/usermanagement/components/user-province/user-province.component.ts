import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IProvince } from '../../models/province';
import { ProvinceService } from '../../services/province.service';
import { UserProvinceDialogComponent } from '../user-province-dialog/user-province-dialog.component';
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
  selector: 'app-user-province',
  imports: [
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './user-province.component.html',
  styleUrl: './user-province.component.css'
})
export class UserProvinceComponent implements OnInit {
  provinces: IProvince[] = [];

  displayedColumns: string[] = ['provinceName', 'countryId', 'actions'];
  dataSource!: MatTableDataSource<IProvince>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IProvince>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router, private provinceService: ProvinceService, private dialog: MatDialog){
  }

  ngOnInit() : void {
    this.loadProvinces();
  }

  loadProvinces(): void {
    this.provinceService.getProvinces().subscribe((provinces) => {
      this.dataSource = new MatTableDataSource(provinces);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openDialog(mCode?:IProvince):void{
    const dialogRef=this.dialog.open(UserProvinceDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.provinceService.updateProvince(result).subscribe(()=>{
            this.loadProvinces();
          });
        } else{
          this.provinceService.createProvince(result).subscribe(()=>{
            this.loadProvinces();
          });
        }
      }
    })
  }

  deleteProvince(province: IProvince) {
    if (confirm(`Delete province ${province.provinceName}?`)) {
      this.provinceService.deleteProvince(province.id).subscribe(() => this.loadProvinces());
    }
  }
}
