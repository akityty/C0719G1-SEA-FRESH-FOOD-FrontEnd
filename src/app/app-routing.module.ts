import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from './FRESH-FOOD/user/create-user/create-user.component';
import {LoginUserComponent} from './FRESH-FOOD/user/login-user/login-user.component';
import {AppComponent} from './app.component';
import {DetailsUserComponent} from './FRESH-FOOD/user/details-user/details-user.component';
import {UpdateUserComponent} from './FRESH-FOOD/user/update-user/update-user.component';
import {UpdatePasswordComponent} from './FRESH-FOOD/user/update-password/update-password.component';



const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'home/auth/login',
    component: LoginUserComponent
  },
  {
    path: 'auth/login',
    component: LoginUserComponent
  },
  {
    path: 'registered',
    component: CreateUserComponent
  },
  {
    path: 'auth/login/registered',
    component: CreateUserComponent
  },
  {
    path: 'userDetails',
    component: DetailsUserComponent
  },
  {
    path: 'userUpdate',
    component: UpdateUserComponent
  },
  {
    path: 'updatePassword',
    component: UpdatePasswordComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
