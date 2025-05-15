import { Component, OnInit, ViewChild } from '@angular/core';
import { IFormIssuance } from '../models/formissuance';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { FormissuanceService } from '../services/formissuance.service';
import { FormIssuanceDialogComponent } from '../form-issuance-dialog/form-issuance-dialog.component';
import { MatSelectChange } from '@angular/material/select';
import { FormissuanceSetupDateFormDialogComponent } from '../formissuance-setup-date-form-dialog/formissuance-setup-date-form-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-form-issuance',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
  ],
  templateUrl: './form-issuance.component.html',
  styleUrl: './form-issuance.component.css'
})
export class FormIssuanceComponent implements OnInit{

  displayedColumns: string[] = ['booknumber','quantity','startreceipt','endreceipt','char','tellercode','tellername','finaldate']
  dataSource!: MatTableDataSource<IFormIssuance>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IFormIssuance>;

  constructor(private formIssuanceService: FormissuanceService,
    private dialog: MatDialog
  )
  {
  }
  ngOnInit(): void {
    this.loadFormIssuance();
  }

  loadFormIssuance(): void{
    this.formIssuanceService.getFormIssuances().subscribe((data) =>
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

  onSelectionChange(event: MatSelectChange){
    this.formIssuanceService = event.value;
  }

  openDialog(dto?:IFormIssuance):void{
    const dialogRef=this.dialog.open(FormIssuanceDialogComponent,{
      data:dto || {}
    });
  }

  openSetupDialog(): void {
    const dialogRef = this.dialog.open(FormissuanceSetupDateFormDialogComponent, {
      width: '400px',
    });

  dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Selected Date:', result.selectedDate);
        console.log('Selected Form:', result.selectedForm);
      }
    });
  }
  deleteFormIssuance(id:number){
    if(confirm('Are you sure you want to delete this Estimated Revenue?')){
      this.formIssuanceService.deleteFormIssuance(id).subscribe(()=>{
        this.loadFormIssuance();
      })
    }
  }
}
