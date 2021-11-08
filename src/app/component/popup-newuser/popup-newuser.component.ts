import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../content/content.component';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popup-newuser',
  templateUrl: './popup-newuser.component.html',
  styleUrls: ['./popup-newuser.component.css'],
})
export class PopupNewuserComponent implements OnInit {
  faTimesCircle = faTimesCircle;
  foods: Food[] = [
    { value: 'hr', viewValue: 'HR' },
    { value: 'se', viewValue: 'SE' },
    { value: 'qa', viewValue: 'QA' },
  ];
  constructor(
    public dialogRef: MatDialogRef<PopupNewuserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}

export interface Food {
  value: string;
  viewValue: string;
}
