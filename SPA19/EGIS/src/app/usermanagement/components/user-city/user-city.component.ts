import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ICity } from '../../models/city';
import { CityService } from '../../services/city.service';
import { UserCityDialogComponent } from '../user-city-dialog/user-city-dialog.component';
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
  selector: 'app-user-city',
  imports: [
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './user-city.component.html',
  styleUrl: './user-city.component.css'
})
export class UserCityComponent implements OnInit {
  cities: ICity[] = [];

  displayedColumns: string[] = ['cityName', 'provinceId', 'actions'];
  dataSource!: MatTableDataSource<ICity>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<ICity>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router, private cityService: CityService, private dialog: MatDialog){
  }

  ngOnInit() : void {
    this.loadCities();
  }

  loadCities(): void {
    this.cityService.getCities().subscribe((cities) => {
      this.dataSource = new MatTableDataSource(cities);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openDialog(mCode?:ICity):void{
    const dialogRef=this.dialog.open(UserCityDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.cityService.updateCity(result).subscribe(()=>{
            this.loadCities();
          });
        } else{
          this.cityService.createCity(result).subscribe(()=>{
            this.loadCities();
          });
        }
      }
    })
  }

  deleteCity(city: ICity) {
    if (confirm(`Delete city ${city.cityName}?`)) {
      this.cityService.deleteCity(city.id).subscribe(() => this.loadCities());
    }
  }
}
