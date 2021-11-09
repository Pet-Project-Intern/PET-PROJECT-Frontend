import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../content/content.component';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Departments } from 'src/app/types/user-info';
import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-popup-newuser',
  templateUrl: './popup-newuser.component.html',
  styleUrls: ['./popup-newuser.component.css'],
})
export class PopupNewuserComponent implements OnInit {
  faTimesCircle = faTimesCircle;
  Departments: Departments[] = [
    { value: 'hr', viewValue: 'HR' },
    { value: 'se', viewValue: 'SE' },
    { value: 'qa', viewValue: 'QA' },
  ];
  constructor(
    public dialogRef: MatDialogRef<PopupNewuserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder
  ) {}

  addUserForm: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control('', Validators.required),
    email: this.formBuilder.control(
      '',

      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]
      // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
    ),
    date: this.formBuilder.control('', Validators.required),
    department: this.formBuilder.control('', Validators.required),
  });

  onSubmit(): void {
    console.log(this.addUserForm.value);
  }

  control(name: string) {
    return this.addUserForm.get(name);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}
