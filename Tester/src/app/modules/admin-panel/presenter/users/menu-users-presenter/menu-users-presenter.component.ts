import { Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SchoolClass } from 'src/app/shared/models/schoolClass.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-menu-users-presenter',
  templateUrl: './menu-users-presenter.component.html',
  styleUrls: ['./menu-users-presenter.component.scss'],
})
export class MenuUsersPresenterComponent {
  @ViewChild(MatSort) sort: MatSort;
  @Input() public set schoolUsers(schoolUsers: MatTableDataSource<User>) {
    this._schoolUsers = schoolUsers;
    schoolUsers.sort = this.sort;
  }
  public get schoolUsers(): MatTableDataSource<User> {
    return this._schoolUsers;
  }
  private _schoolUsers: MatTableDataSource<User>;

  @Input() schoolClasses: SchoolClass[];

  sortingValue: string;
  displayedColumns: string[] = ['name', 'surename', 'schoolClass'];
}
