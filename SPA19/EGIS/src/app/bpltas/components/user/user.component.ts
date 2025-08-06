import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IBPLTASUser } from '../../models/bpltasuser';
import { BpltasuserService } from '../../services/bpltasuser.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-user',
  imports: [
    MatFormField,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CommonModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  showSubCode = false;
  selectedMasterCode!: number;
  selectedDescription!: string;

  displayedColumns: string[] = ['firstName', 'lastName', 'middleName', 'email', 'role', 'status', 'actions'];
  dataSource!: MatTableDataSource<IBPLTASUser>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IBPLTASUser>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private bpltasuserService: BpltasuserService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void{
    this.bpltasuserService.getUsers().subscribe((mcodes) =>
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

  openDialog(mCode?:IBPLTASUser):void{
    const dialogRef=this.dialog.open(UserDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.bpltasuserService.updateUser(result).subscribe(()=>{
            this.loadUsers();
          });
        } else{
          this.bpltasuserService.createUser(result).subscribe(()=>{
            this.loadUsers();
          });
        }
      }
    })
  }
  deletePayment(id:number){
    if(confirm('Are you sure you want to delete this user?')){
      this.bpltasuserService.deleteUser(id).subscribe(()=>{
        this.loadUsers();
      })
    }
  }
}
