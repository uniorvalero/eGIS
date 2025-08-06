import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IApp } from '../../models/app';
import { IMenu } from '../../models/menu';
import { IRole } from '../../models/role';
import { IUser } from '../../models/user';
import { AppService } from '../../services/app.service';
import { MenuService } from '../../services/menu.service';
import { RoleService } from '../../services/role.service';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { UserAppDialogComponent } from '../user-app-dialog/user-app-dialog.component';
import { UserRolesDialogComponent } from '../user-roles-dialog/user-roles-dialog.component';

@Component({
  selector: 'app-user-roles',
  standalone: true,
  imports: [
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './user-roles.component.html',
  styleUrl: './user-roles.component.css'
})

export class UserRolesComponent implements OnInit {
  roles: IRole[] = [];
  displayedColumns: string[] = ['roleName', 'actions'];
  dataSource!: MatTableDataSource<IRole>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IRole>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router, private roleService: RoleService, private dialog: MatDialog){
  }

  ngOnInit() : void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.roleService.getRoles().subscribe((roles) => {
      this.dataSource = new MatTableDataSource(roles);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openDialog(mCode?:IRole):void{
    const dialogRef=this.dialog.open(UserRolesDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.roleService.updateRole(result).subscribe(()=>{
            this.loadRoles();
          });
        } else{
          this.roleService.createRole(result).subscribe(()=>{
            this.loadRoles();
          });
        }
      }
    })
  }

  deleteRole(role: IRole) {
    if (confirm(`Delete role ${role.roleName}?`)) {
      this.roleService.deleteRole(role.id).subscribe(() => this.loadRoles());
    }
  }
}
