import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IProperty } from '../../models/property';
import { PropertyService } from '../../services/property.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { PropertyDialogComponent } from '../property-dialog/property-dialog.component';
import { User, UsersService } from '../../services/users.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-property',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css'
})
export class PropertyComponent implements OnInit {
  showSubCode = false;
  selectedMasterCode!: number;
  selectedDescription!: string;

  displayedColumns: string[] = ['taxDeclarationNo', 'ownerName', 'titleNo', 'classification', 'location', 'landArea', 'propertyStatus', 'actions'];
  dataSource!: MatTableDataSource<IProperty>;

  @ViewChild(MatPaginator) paginator!:MatPaginator; 
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IProperty>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router,private usersService: UsersService ,private propertyService: PropertyService, private dialog: MatDialog){
  }

  ngOnInit(): void {
      this.loadProperty();
  }
  
  loadProperty(): void {
    this.propertyService.getAllProperties().subscribe((properties) => {
    // For each property, get the owner's username
    const ownerRequests = properties.map(prop =>
    this.usersService.getUserById(prop.ownerId));

    forkJoin(ownerRequests).subscribe(users => {
      // Assign ownerName to each property
      properties.forEach((prop, idx) => {
        prop.ownerName = users[idx]?.userName || '';
        });
          this.dataSource = new MatTableDataSource(properties);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      });
  }
  
    applyFilter(event:Event): void{
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
  
    openDialog(mCode?:IProperty):void{
      const dialogRef=this.dialog.open(PropertyDialogComponent,{
        data:mCode || {}
      });
      dialogRef.afterClosed().subscribe(result=>{
        if(result){
          if(result.id){
            this.propertyService.updateProperty(result).subscribe(()=>{
              this.loadProperty();
            });
          } else{
            this.propertyService.createProperty(result).subscribe(()=>{
              this.loadProperty();
            });
          }
        }
      })
    }
    deleteProperty(id:number){
      if(confirm('Are you sure you want to delete this property?')){
        this.propertyService.deleteProperty(id).subscribe(()=>{
          this.loadProperty();
        })
      }
    }
}

