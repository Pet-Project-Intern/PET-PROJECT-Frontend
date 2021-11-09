import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
import { UserinfoService } from '../../service/userinfo.service';
import { UserInfo } from 'src/app/types/user-info';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [UserinfoService],
})
export class ContentComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'userID',
    'name',
    'email',
    'department',
    'assignDate',
    'action',
  ];
  dataSource = new MatTableDataSource<UserInfo>(this.Data.getUserInfo());
  faSearch = faSearch;
  faEllipsisH = faEllipsisH;
  faTrash = faTrash;
  faEdit = faEdit;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {}

  constructor(public dialog: MatDialog, private Data: UserinfoService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupNewuserComponent, {
      width: '400px',
      height: '90vh',
      // data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
