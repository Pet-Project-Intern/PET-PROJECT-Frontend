import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserInfoComponent } from './component/user-info/user-info.component';
import { HomeComponent } from './component/login/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  // { path: '', component: UserInfoComponent },
  // { path: 'login', component: HomeComponent },
  {
    path:'',
    component: DefaultComponent,
    children:[{
      path:'',
      component: HomeComponent
    },{
      path:'signup',
      component: SignupComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
