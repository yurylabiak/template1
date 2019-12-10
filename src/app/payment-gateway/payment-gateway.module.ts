import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDebitComponent } from './payment-debit/payment-debit.component';
import { PaymentCardComponent } from './payment-card/payment-card.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PaymentGatewayRoutingModule } from './payment-gateway-routing.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [PaymentDebitComponent, PaymentCardComponent, PaymentSummaryComponent],
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
    MatSelectModule,
    MatRadioModule,
    MatAutocompleteModule,

    PaymentGatewayRoutingModule
  ]
})
export class PaymentGatewayModule { }
