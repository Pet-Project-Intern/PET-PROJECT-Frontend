import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { ContentComponent } from './component/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NavComponent, SideNavComponent, ContentComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
