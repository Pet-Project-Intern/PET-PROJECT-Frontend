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
import { FormBuilder, FormGroup } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) {}
  displayedColumns: string[] = [
    'userID',
    'name',
    'email',
    'department',
    'assignDate',
    'action',
  ];
  // searchForm: FormGroup = this.formBuilder.group({
  //   search: this.formBuilder.control(''),
  // });

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
      // this.getAllEmployee();
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
      // console.log(result);
      // this.Data.editUser(result.id, result).subscribe((result) => {
      //   console.log(result);
      // });
      console.log('The edituser was closed');
      // this.getAllEmployee();
    });
  }

  deleteUser(id: string) {
    this.Data.deleteUser(id).subscribe(() => {
      this.getAllEmployee();
    });
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
