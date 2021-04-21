import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { OneUserComponent } from './components/one-user/one-user.component';

const routes: Routes = [
  { path: 'users', component: AllUsersComponent },
  { path: '***', pathMatch: 'full', component: AllUsersComponent },
  { path: 'user/:id', component: OneUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
