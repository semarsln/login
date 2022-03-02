import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';
import { GeneratepasswordComponent } from './components/generatepassword/generatepassword.component';

const routes: Routes = [
  {
    path: '',
    component: SignComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'generatepassword',
    component: GeneratepasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
