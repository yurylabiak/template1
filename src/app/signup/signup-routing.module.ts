import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SignupAgreeComponent } from './signup-agree/signup-agree.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
const routes: Routes = [
  {
    path: '',
    component: SignupComponent
  },
  {
    path: 'agree',
    component: SignupAgreeComponent
  },
  {
    path: 'success',
    component: SignupSuccessComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule {}
