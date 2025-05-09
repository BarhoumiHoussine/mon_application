import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RestpasswordComponent } from './restpassword/restpassword.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'forgetpassword',       component: ForgetpasswordComponent },
    { path: 'resetpassword/:token',       component: RestpasswordComponent }
];
