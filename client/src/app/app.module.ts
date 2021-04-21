import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { OneUserComponent } from './components/one-user/one-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    OneUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
