import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IBaranggay } from '../../models/baranggay';
import { BaranggayService } from '../../services/baranggay.service';
import { BaranggaysDialogComponent } from '../baranggays-dialog/baranggays-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baranggays',
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
  templateUrl: './baranggays.component.html',
  styleUrl: './baranggays.component.css'
})
export class BaranggaysComponent implements OnInit {
  showSubCode = false;
  selectedMasterCode!: number;
  selectedDescription!: string;

  displayedColumns: string[] = ['name', 'zoneNo', 'city', 'province', 'actions'];
  dataSource!: MatTableDataSource<IBaranggay>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IBaranggay>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router, private baranggayService: BaranggayService, private dialog: MatDialog){
  }

  ngOnInit(): void {
      this.loadMasterCode();
    }
  
    loadMasterCode(): void{
      this.baranggayService.getAllBaranggays().subscribe((mcodes) =>
        {   
           this.dataSource = new MatTableDataSource(mcodes);
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
        });
    }
  
    applyFilter(event:Event): void{
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
  
    openDialog(mCode?:IBaranggay):void{
      const dialogRef=this.dialog.open(BaranggaysDialogComponent,{
        data:mCode || {}
      });
      dialogRef.afterClosed().subscribe(result=>{
        if(result){
          if(result.id){
            this.baranggayService.updateBaranggay(result).subscribe(()=>{
              this.loadMasterCode();
            });
          } else{
            this.baranggayService.createBaranggay(result).subscribe(()=>{
              this.loadMasterCode();
            });
          }
        }
      })
    }
    deleteMasterCode(id:number){
      if(confirm('Are you sure you want to delete this master table code?')){
        this.baranggayService.deleteBaranggay(id).subscribe(()=>{
          this.loadMasterCode();
        })
      }
    }
}
