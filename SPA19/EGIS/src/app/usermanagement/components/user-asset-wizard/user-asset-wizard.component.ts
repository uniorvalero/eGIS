import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { IApp } from '../../models/app';
import { IMenu } from '../../models/menu';
import { IRole } from '../../models/role';
import { IUser } from '../../models/user';
import { AppService } from '../../services/app.service';
import { MenuService } from '../../services/menu.service';
import { RoleService } from '../../services/role.service';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-asset-wizard',
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    CommonModule
  ],
  templateUrl: './user-asset-wizard.component.html',
  styleUrl: './user-asset-wizard.component.css'
})
export class UserAssetWizardComponent implements OnInit {
  users: IUser[] = [];
  roles: IRole[] = [];
  apps: IApp[] = [];
  menus: IMenu[] = [];
  filteredMenus: IMenu[] = [];
  ready: boolean = false;

  userRoleForm!: FormGroup;
  appMenuForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private roleService: RoleService,
    private appService: AppService,
    private menuService: MenuService
  ) {}
  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.roleService.getRoles().subscribe(roles => {
        this.roles = roles;
        this.buildUserRoleForm();
        this.appService.getApps().subscribe(apps => {
          this.apps = apps;
          // Initialize appMenuForm with empty menus array
          this.appMenuForm = this.fb.group({
            appId: [null, Validators.required],
            menus: this.fb.array([])
          });
          this.ready = true; // Only set ready when everything is loaded and initialized
        });
      });
    });
  }

  buildUserRoleForm() {
    const roleControls = this.roles.map(() => new FormControl(false));
    this.userRoleForm = this.fb.group({
      userId: [null, Validators.required],
      roles: this.fb.array(roleControls)
    });
  }

  get rolesArray(): FormArray<FormControl<boolean>> {
    return this.userRoleForm.get('roles') as FormArray<FormControl<boolean>>;
  }

  get menusArray(): FormArray<FormControl<boolean>> {
    return this.appMenuForm.get('menus') as FormArray<FormControl<boolean>>;
  }

  onAppChange(appId: number) {
  this.menuService.getMenus().subscribe(menus => {
    this.menus = menus;
    const menuControls = this.menus.map(() => new FormControl(false));
    this.appMenuForm.setControl('menus', this.fb.array(menuControls));
    });
  }

  getSelectedRoles() {
    return this.roles
      .filter((_, i) => this.rolesArray.at(i).value)
      .map(r => r.roleName)
      .join(', ');
  }

  getSelectedMenus() {
    return this.menus
      .filter((_, i) => this.menusArray.at(i).value)
      .map(m => m.menuName)
      .join(', ');
  }

  getUserName(userId: number) {
    const user = this.users.find(u => u.id === userId);
    return user ? `${user.firstName} ${user.lastName}` : '';
  }

  getAppName(appId: number) {
    const app = this.apps.find(a => a.id === appId);
    return app ? app.name : '';
  }

  save() {
    const selectedRoleIds = this.roles
      .filter((_, i) => this.rolesArray.at(i).value)
      .map(r => r.id);

    const selectedMenuIds = this.menus
      .filter((_, i) => this.menusArray.at(i).value)
      .map(m => m.id);

    const payload = {
      userId: this.userRoleForm.value.userId,
      roleIds: selectedRoleIds,
      appId: this.appMenuForm.value.appId,
      menuIds: selectedMenuIds
    };

    // Call your backend API to save the assignment
    console.log('Saving:', payload);
    // this.assignmentService.saveAssignment(payload).subscribe(...)
  }
}
