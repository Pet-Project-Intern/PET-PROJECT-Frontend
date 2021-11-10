import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Departments, UserInfo } from 'src/app/types/user-info';
import { UserinfoService } from '../../service/userinfo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-edituser',
  templateUrl: './popup-edituser.component.html',
  styleUrls: ['./popup-edituser.component.css'],
  providers: [UserinfoService],
})
export class PopupEdituserComponent implements OnInit {
  faTimesCircle = faTimesCircle;
  Departments: Departments[] = [
    { value: 'HR', viewValue: 'HR' },
    { value: 'SE', viewValue: 'SE' },
    { value: 'QA', viewValue: 'QA' },
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserInfo,
    public dialogRef: MatDialogRef<PopupEdituserComponent>,
    private formBuilder: FormBuilder,
    private userInfo: UserinfoService
  ) {}

  addUserForm: FormGroup = this.formBuilder.group({
    id: this.formBuilder.control(this.data.id),
    userCategory: this.formBuilder.control(this.data.userCategory),
    password: this.formBuilder.control(this.data.password),
    name: this.formBuilder.control(this.data.name, Validators.required),
    emailId: this.formBuilder.control(this.data.emailId, [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    registerDate: this.formBuilder.control(
      this.data.registerDate,
      Validators.required
    ),
    department: this.formBuilder.control(
      this.data.department,
      Validators.required
    ),
  });

  onSubmit(): void {
    // console.log(this.addUserForm.value);
    this.userInfo
      .editUser(this.addUserForm.value.id, this.addUserForm.value)
      .subscribe((result) => {
        location.reload();
        this.onNoClick();
      });
  }

  control(name: string) {
    return this.addUserForm.get(name);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}
