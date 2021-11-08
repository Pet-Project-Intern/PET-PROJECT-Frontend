import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserInfoComponent } from './component/user-info/user-info.component';
import { HomeComponent } from './component/login/home.component';

const routes: Routes = [
  { path: '', component: UserInfoComponent },
  { path: 'login', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
