import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PwdResetComponent } from './pwd-reset/pwd-reset.component';
import { PwdResetSentComponent } from './pwd-reset-sent/pwd-reset-sent.component';
import { PwdChooseComponent } from './pwd-choose/pwd-choose.component';

const routes: Routes = [
  {
    path: '',
    component: PwdResetComponent
  },
  {
    path: 'resentsent',
    component: PwdResetSentComponent
  },
  {
    path: 'choose',
    component: PwdChooseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwdResetRoutingModule { }