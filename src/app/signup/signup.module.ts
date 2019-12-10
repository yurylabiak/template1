import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SignupAgreeComponent } from './signup-agree/signup-agree.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
  ],
  declarations: [SignupComponent, SignupAgreeComponent, SignupSuccessComponent]
})
export class SignupModule {}
