import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './background/background.component';
import { RouterModule } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    BackgroundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexModule,
  ]
})
export class SharedModule { }
