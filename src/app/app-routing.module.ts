import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserInfoComponent } from './component/user-info/user-info.component';
import { HomeComponent } from './component/home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { SignupComponent } from './component/signup/signup.component';
import { ForgetPwComponent } from './component/forget-pw/forget-pw.component';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';

const routes: Routes = [
  { path: 'user', component: UserInfoComponent },
  { path: 'employee', component: EmployeeDashboardComponent },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'forgetPassword',
        component: ForgetPwComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
