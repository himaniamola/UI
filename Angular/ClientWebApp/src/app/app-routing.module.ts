import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';

const routes: Routes = [
{path:"login", component:LoginComponent},
  { path: "register", component: RegisterComponent },
  { path: "user-mgmt", component: UserMgmtComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
