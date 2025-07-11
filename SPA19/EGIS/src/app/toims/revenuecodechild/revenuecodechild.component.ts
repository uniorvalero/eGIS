import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IRevenueCodeChild } from '../models/revenuecodechild';
import { MatSort } from '@angular/material/sort';
import { RevenuecodechildService } from '../services/revenuecodechild.service';
import { MatDialog } from '@angular/material/dialog';
import { RevenuecodechildDialogComponent } from '../revenuecodechild-dialog/revenuecodechild-dialog.component';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-revenuecodechild',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './revenuecodechild.component.html',
  styleUrl: './revenuecodechild.component.css'
})
export class RevenuecodechildComponent implements OnInit {
  revenueCode!: string;
  revenueDescription!: string;
  showSubCode: boolean = false;

  displayedColumns: string[] = ['id','code','amount', 'description','actions']
  dataSource!: MatTableDataSource<IRevenueCodeChild>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IRevenueCodeChild>;

  constructor(private revenuecodechildService: RevenuecodechildService, private dialog: MatDialog,
      private router: Router, private route: ActivatedRoute,){
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.revenueCode = params['code'];
      this.revenueDescription = params['description'];
      this.revenuecodechildService.getRevenueCodeChildLst(this.revenueCode).subscribe({
        next: (data) => {
          this.dataSource = new MatTableDataSource(data);
        },
        error: (err) => {
          console.error('Error fetching master subcodes:', err);
        }
      });
    });
  }

  loadRevenueCodeChild(): void{
    this.revenuecodechildService.getRevenueCodeChildLst(this.revenueCode).subscribe((rcodes) =>
      {   
         this.dataSource = new MatTableDataSource(rcodes);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
         
      });
  }

   applyFilter(event:Event): void{
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
  
    openDialog(rCodes?:IRevenueCodeChild):void{
      const dialogRef=this.dialog.open(RevenuecodechildDialogComponent,{
        data:rCodes || {}
      });
  
     
      dialogRef.afterClosed().subscribe(result=>{
        if(result){
          if(result.id){
            this.revenuecodechildService.updateRevenueCodeChild(result).subscribe(()=>{
              this.loadRevenueCodeChild();
            });
          } else{
            this.revenuecodechildService.createRevenueCodeChild(result).subscribe(()=>{
              this.loadRevenueCodeChild();
            });
          }
        }
      })
  
    }
  
    deleteRevenueCodeChild(id:number){
      if(confirm('Are you sure you want to delete this revenue code child?')){
        this.revenuecodechildService.deleteRevenueCodeChild(id).subscribe(()=>{
          this.loadRevenueCodeChild();
        })
      }
    }

    goToParent(): void {
      this.router.navigate(['/mainlayout/revenuecodeparent']);
      this.showSubCode = true; 
    }

}
