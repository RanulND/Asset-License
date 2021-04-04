import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Container/about-us/about-us.component';
import { ContactUsComponent } from './Container/contact-us/contact-us.component';
import { HomeComponent} from './Container/home/home.component'
import { MedicalComponent } from './Container/medical/medical.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {path:'aboutUs',component: AboutUsComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'medical',component:MedicalComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
