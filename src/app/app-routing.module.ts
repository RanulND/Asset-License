import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { AboutUsComponent } from './Container/about-us/about-us.component';
import { ContactUsComponent } from './Container/contact-us/contact-us.component';
import { HomeComponent} from './Container/home/home.component'
import { InfoComponent } from './Container/info/info.component';
import { LoginAdminComponent } from './Container/login-admin/login-admin.component';
import { MedicalComponent } from './Container/medical/medical.component';
import { SignInPageComponent } from './Container/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './Container/sign-up-page/sign-up-page.component';
import { UserAccComponent } from './Container/user-acc/user-acc.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'aboutUs',
    component: AboutUsComponent
  },
  {
    path:'contactUs',
    component:ContactUsComponent
  },
  {
    path:'medical',
    component:MedicalComponent
  },
  {
    path:'admin',
    component: LoginAdminComponent
  },
  {
    path:'info',
    component: InfoComponent
  },
  {
    path:'sign-in',
    component: SignInPageComponent
  },
  {
    path:'sign-up',
    component: SignUpPageComponent
  },
  {
    path:'user',
    component: UserAccComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
