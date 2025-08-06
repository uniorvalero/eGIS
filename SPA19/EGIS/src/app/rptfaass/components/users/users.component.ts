import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IUsers } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { UsersDialogComponent } from '../users-dialog/users-dialog.component';
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
  selector: 'app-users',
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
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['userName', 'role', 'email', 'phone', 'actions'];
  dataSource!: MatTableDataSource<IUsers>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IUsers>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router, private usersService: UsersService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void{
    this.usersService.getAllUsers().subscribe((mcodes) =>
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

  openDialog(mCode?:IUsers):void{
    const dialogRef=this.dialog.open(UsersDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.usersService.updateUser(result).subscribe(()=>{
            this.loadUsers();
          });
        } else{
          this.usersService.createUser(result).subscribe(()=>{
            this.loadUsers();
          });
        }
      }
    })
  }
  deleteUsers(id:number){
    if(confirm('Are you sure you want to delete this master table code?')){
      this.usersService.deleteUser(id).subscribe(()=>{
        this.loadUsers();
      })
    }
  }
}
