import { Component, OnInit, ViewChild } from '@angular/core';
import { IRptasSubCode } from '../models/rptassubcode';
import { RptassubcodeService } from '../services/rptassubcode.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RptasSubCodeDialogComponent } from '../rptas-sub-code-dialog/rptas-sub-code-dialog.component';

@Component({
  selector: 'app-rptas-sub-code',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './rptas-sub-code.component.html',
  styleUrl: './rptas-sub-code.component.css'
})
export class RptasSubCodeComponent implements OnInit {
   masterCode!: number;
   masterCodeDescription!: string;
   showSubCode: boolean = false;

  displayedColumns: string[] = ['id','code','subcode', 'description','actions']
  dataSource!: MatTableDataSource<IRptasSubCode>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IRptasSubCode>;

  constructor(private route: ActivatedRoute, private rptassubcodeService: RptassubcodeService, private dialog: MatDialog, private router: Router){
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.masterCode = params['code'];
      this.masterCodeDescription = params['description'];
      this.rptassubcodeService.getMasterSubCodes(this.masterCode).subscribe({
        next: (data) => {
          this.dataSource = new MatTableDataSource(data);
        },
        error: (err) => {
          console.error('Error fetching master subcodes:', err);
        }
      });
    });
  }

  loadMasterSubCode(): void{
    this.rptassubcodeService.getMasterSubCodes(this.masterCode).subscribe((mscodes) =>
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
  
  openDialog(msCode?:IRptasSubCode):void{
    const dialogRef=this.dialog.open(RptasSubCodeDialogComponent,{
      data:msCode || {}
    });

    
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.rptassubcodeService.updateMasterSubCode(result).subscribe(()=>{
            this.loadMasterSubCode();
          });
        } else{
          this.rptassubcodeService.createMasterSubCode(result).subscribe(()=>{
            this.loadMasterSubCode();
          });
        }
      }
    })

  }

  deleteMasterSubCode(id:number){
    if(confirm('Are you sure you want to delete this master sub table code?')){
      this.rptassubcodeService.deleteMasterSubCode(id).subscribe(()=>{
        this.loadMasterSubCode();
      })
    }
  }

  goToMasterCode(): void {
    this.router.navigate(['/mainlayout/master']);
    this.showSubCode = true; 
  }
}
