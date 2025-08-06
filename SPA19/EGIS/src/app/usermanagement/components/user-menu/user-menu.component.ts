import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IMenu } from '../../models/menu';
import { UserMenuDialogComponent } from '../user-menu-dialog/user-menu-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-user-menu',
  imports: [
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginator,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent implements OnInit {
  menus: IMenu[] = [];

  displayedColumns: string[] = ['menuName', 'appId', 'actions'];
  dataSource!: MatTableDataSource<IMenu>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) table!:MatTable<IMenu>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private router: Router, private menuService: MenuService, private dialog: MatDialog){
  }

  ngOnInit() : void {
    this.loadMenus();
  }

  loadMenus(): void {
    this.menuService.getMenus().subscribe((menus) => {
      this.dataSource = new MatTableDataSource(menus);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openDialog(mCode?:IMenu):void{
    const dialogRef=this.dialog.open(UserMenuDialogComponent,{
      data:mCode || {}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.id){
          this.menuService.updateMenu(result).subscribe(()=>{
            this.loadMenus();
          });
        } else{
          this.menuService.createMenu(result).subscribe(()=>{
            this.loadMenus();
          });
        }
      }
    })
  }

  deleteMenu(menu: IMenu) {
    if (confirm(`Delete menu ${menu.menuName}?`)) {
      this.menuService.deleteMenu(menu.id).subscribe(() => this.loadMenus());
    }
  }
}
