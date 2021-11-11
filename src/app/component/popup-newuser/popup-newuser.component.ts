import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Departments } from 'src/app/types/user-info';
import { UserinfoService } from '../../service/userinfo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-newuser',
  templateUrl: './popup-newuser.component.html',
  styleUrls: ['./popup-newuser.component.css'],
  providers: [UserinfoService],
})
export class PopupNewuserComponent implements OnInit {
  faTimesCircle = faTimesCircle;
  Departments: Departments[] = [
    { value: 'HR', viewValue: 'HR' },
    { value: 'SE', viewValue: 'SE' },
    { value: 'QA', viewValue: 'QA' },
  ];
  constructor(
    public dialogRef: MatDialogRef<PopupNewuserComponent>,
    private formBuilder: FormBuilder,
    private userInfo: UserinfoService
  ) {}

  addUserForm: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control('', Validators.required),
    emailId: this.formBuilder.control(
      '',

      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]
    ),
    registerDate: this.formBuilder.control('', Validators.required),
    department: this.formBuilder.control('', Validators.required),
  });

  onSubmit(): void {
    this.userInfo.userSave(this.addUserForm.value).subscribe();
    location.reload();
    this.onNoClick();
  }

  control(name: string) {
    return this.addUserForm.get(name);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}
