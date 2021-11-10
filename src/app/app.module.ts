import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SignupComponent } from './component/signup/signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { ContentComponent } from './component/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { NavComponent } from './component/nav/nav.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupNewuserComponent } from './component/popup-newuser/popup-newuser.component';
import { PopupEdituserComponent } from './component/popup-edituser/popup-edituser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BackgroundComponent } from './shared/background/background.component';
import { DefaultComponent } from './layouts/default/default.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgetPwComponent } from './component/forget-pw/forget-pw.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideNavComponent,
    ContentComponent,
    UserInfoComponent,
    HomeComponent,
    SignupComponent,
    PopupNewuserComponent,
    BackgroundComponent,
    DefaultComponent,
    ForgetPwComponent,
    PopupEdituserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
