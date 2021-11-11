import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  faSearch,
  faEllipsisH,
  faTrash,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PopupNewuserComponent } from '../popup-newuser/popup-newuser.component';
import { PopupEdituserComponent } from '../popup-edituser/popup-edituser.component';
import { UserinfoService } from '../../service/userinfo.service';
import { UserInfo } from 'src/app/types/user-info';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [UserinfoService],
})
export class ContentComponent implements AfterViewInit, OnInit {
  constructor(
    public dialog: MatDialog,
    private Data: UserinfoService,
    private _snackBar: MatSnackBar
  ) {}
  displayedColumns: string[] = [
    'userID',
    'name',
    'email',
    'department',
    'assignDate',
    'action',
  ];

  dataSource = new MatTableDataSource<UserInfo>();
  serchDataSource: UserInfo[] = [];
  faSearch = faSearch;
  faEllipsisH = faEllipsisH;
  faTrash = faTrash;
  faEdit = faEdit;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @Input() search: string | undefined;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.Data.getEmployeeInfo().subscribe(
      (users) => {
        this.dataSource.data = users;
        this.dataSource.paginator = this.paginator;
      },
      (error) => console.log(error)
    );
  }
  searchEmployeeData() {
    this.Data.getEmployeeInfo().subscribe(
      (users) => {
        this.serchDataSource = users;
      },
      (error) => console.log(error)
    );
  }

  openAddUser(): void {
    const dialogRef = this.dialog.open(PopupNewuserComponent, {
      width: '400px',
      height: '90vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The adduser was closed');
    });
  }
  openEditUser(userInfo: UserInfo): void {
    const dialogRef = this.dialog.open(PopupEdituserComponent, {
      width: '400px',
      height: '90vh',
      data: userInfo,
    });

    dialogRef.afterClosed().subscribe((result: UserInfo) => {
      console.log('The edituser was closed');
    });
  }

  deleteUser(id: string, name: string) {
    if (confirm('Are you want to remove user , Name: ' + name)) {
      this.Data.deleteUser(id).subscribe(() => {
        this.getAllEmployee();
        this._snackBar.open('User removed successful', 'ok');
      });
    }
  }

  searchUser(word: string) {
    if (word.trim().length != 0) {
      this.searchEmployeeData();
      let filterdData = this.serchDataSource.filter((employee) => {
        return (
          employee.name.startsWith(word) ||
          employee.emailId.startsWith(word) ||
          employee.registerDate.startsWith(word)
        );
      });
      this.dataSource.data = filterdData;
      console.log(word);
    } else {
      this.getAllEmployee();
    }
  }
}
