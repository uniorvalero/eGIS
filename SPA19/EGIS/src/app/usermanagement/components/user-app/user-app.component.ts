import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IApp } from '../../models/app';
import { UserAppDialogComponent } from '../user-app-dialog/user-app-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-app',
  imports: [
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './user-app.component.html',
  styleUrl: './user-app.component.css'
})
export class UserAppComponent implements OnInit {
  apps: IApp[] = [];

  displayedColumns: string[] = ['name', 'description', 'version', 'actions'];
  dataSource!: MatTableDataSource<IApp>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IApp>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router, private appService: AppService, private dialog: MatDialog){
  }

  ngOnInit() : void {
    this.loadApps();
  }

  loadApps(): void {
    this.appService.getApps().subscribe((apps) => {
      this.dataSource = new MatTableDataSource(apps);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openDialog(mCode?:IApp):void{
    const dialogRef=this.dialog.open(UserAppDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.appService.updateApp(result).subscribe(()=>{
            this.loadApps();
          });
        } else{
          this.appService.createApp(result).subscribe(()=>{
            this.loadApps();
          });
        }
      }
    })
  }

  deleteApp(app: IApp) {
    if (confirm(`Delete app ${app.name}?`)) {
      this.appService.deleteApp(app.id).subscribe(() => this.loadApps());
    }
  }
}
