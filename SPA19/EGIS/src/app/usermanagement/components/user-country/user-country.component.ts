import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ICountry } from '../../models/country';
import { CountryService } from '../../services/country.service';
import { UserCountryDialogComponent } from '../user-country-dialog/user-country-dialog.component';
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
  selector: 'app-user-country',
  imports: [
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './user-country.component.html',
  styleUrl: './user-country.component.css'
})
export class UserCountryComponent implements OnInit {
  countries: ICountry[] = [];

  displayedColumns: string[] = ['countryName', 'actions'];
  dataSource!: MatTableDataSource<ICountry>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<ICountry>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router, private countryService: CountryService, private dialog: MatDialog){
  }

  ngOnInit() : void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.countryService.getCountries().subscribe((countries) => {
      this.dataSource = new MatTableDataSource(countries);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openDialog(mCode?:ICountry):void{
    const dialogRef=this.dialog.open(UserCountryDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.countryService.updateCountry(result).subscribe(()=>{
            this.loadCountries();
          });
        } else{
          this.countryService.createCountry(result).subscribe(()=>{
            this.loadCountries();
          });
        }
      }
    })
  }

  deleteCountry(country: ICountry) {
    if (confirm(`Delete country ${country.countryName}?`)) {
      this.countryService.deleteCountry(country.id).subscribe(() => this.loadCountries());
    }
  }
}
