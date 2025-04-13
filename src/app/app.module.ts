import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { PaymentDatailsComponent } from './payment-datails/payment-datails.component';
import { PaymentDetailsFormComponent } from './payment-datails/payment-details-form/payment-details-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { FirstKeyPipe } from './shared/pipes/first-key.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PaymentDatailsComponent,
    PaymentDetailsFormComponent,
    FirstKeyPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule,
    UserComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
