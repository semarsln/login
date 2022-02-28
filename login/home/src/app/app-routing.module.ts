import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginComponent } from './Components/login/login.component';
import { SignComponent } from './Components/sign/sign.component';
import { GeneratepasswordComponent } from './Components/generatepassword/generatepassword.component';

const routes: Routes = [
  {
    path: 'sign',
    component: SignComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
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
