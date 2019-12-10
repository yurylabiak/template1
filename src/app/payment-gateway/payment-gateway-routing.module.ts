import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentDebitComponent } from './payment-debit/payment-debit.component';
import { PaymentCardComponent } from './payment-card/payment-card.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentDebitComponent
  },
  {
    path: 'card',
    component: PaymentCardComponent
  },
  {
    path: 'summary',
    component: PaymentSummaryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentGatewayRoutingModule { }