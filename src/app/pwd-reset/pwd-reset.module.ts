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

import { PwdResetComponent } from './pwd-reset/pwd-reset.component';
import { PwdResetRoutingModule } from './pwd-reset-routing.module';
import { PwdResetSentComponent } from './pwd-reset-sent/pwd-reset-sent.component';
import { PwdChooseComponent } from './pwd-choose/pwd-choose.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    
    PwdResetRoutingModule
  ],
  declarations: [PwdResetComponent, PwdResetSentComponent, PwdChooseComponent],
})
export class PwdResetModule { }
