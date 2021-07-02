import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDMTComponent } from './Container/admin-dmt/admin-dmt.component';
import { AdminPoliceComponent } from './Container/admin-police/admin-police.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { AboutUsComponent } from './Container/about-us/about-us.component';
import { ContactUsComponent } from './Container/contact-us/contact-us.component';
import { DmtReservationExamComponent } from './Container/dmt-reservation-exam/dmt-reservation-exam.component';
import { DmtReservationMedicalComponent } from './Container/dmt-reservation-medical/dmt-reservation-medical.component';
import { DmtUserDashboardComponent } from './Container/dmt-user-dashboard/dmt-user-dashboard.component';
import { DmtUserComponent } from './Container/dmt-user/dmt-user.component';
import { ExamComponent } from './Container/exam/exam.component';
import { HomeComponent} from './Container/home/home.component'
import { InfoComponent } from './Container/info/info.component';
import { LoginAdminComponent } from './Container/login-admin/login-admin.component';
import { MedicalComponent } from './Container/medical/medical.component';
import { ReservationComponent } from './Container/reservation/reservation.component';
import { DmtReservationExamDashboardComponent } from './Container/dmt-reservation-exam-dashboard/dmt-reservation-exam-dashboard.component';
import { SignInPageComponent } from './Container/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './Container/sign-up-page/sign-up-page.component';
import { UserAccComponent } from './Container/user-acc/user-acc.component';
import { DmtAdminGuardGuard } from './Services/guards/dmt-admin-guard.guard';
import { LoggedUserGuard } from './Services/guards/logged-user.guard';
import { PoliceAdminGuardGuard } from './Services/guards/police-admin-guard.guard';
import { UserGuardGuard } from './Services/guards/user-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [UserGuardGuard]
  },
  {
    path:'aboutUs',
    component: AboutUsComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path:'contactUs',
    component:ContactUsComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path:'medical',
    component:MedicalComponent,
    canActivate: [LoggedUserGuard]
  },
  {
    path:'reservations',
    component: ReservationComponent,
    canActivate: [LoggedUserGuard]
  },
  {
    path:'written-exam',
    component: ExamComponent,
    canActivate: [LoggedUserGuard]
  },
  // {
  //   path:'admin',
  //   component: LoginAdminComponent
  // },
  {
    path:'facilities',
    component: InfoComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path:'sign-in',
    component: SignInPageComponent,
  },
  {
    path:'sign-up',
    component: SignUpPageComponent
  },
  {
    path:'user',
    component: UserAccComponent,
    canActivate: [LoggedUserGuard]
  },
  {
    path: 'admin/police',
    component: AdminPoliceComponent,
    canActivate: [PoliceAdminGuardGuard],
  },
  {
    path: 'admin/dmt',
    component: AdminDMTComponent,
    canActivate: [DmtAdminGuardGuard],
  },
  {
    path: 'admin/dmt/dashboard',
    component: DmtUserDashboardComponent,
    canActivate: [DmtAdminGuardGuard],
  },
  {
    path: 'admin/dmt/dashboard/user/:id',
    component: DmtUserComponent,
    canActivate: [DmtAdminGuardGuard],
  },
  {
    path: 'admin/dmt/medical-reservation',
    component: DmtReservationMedicalComponent,
    canActivate: [DmtAdminGuardGuard],
  },
  {
    path: 'admin/dmt/exam-reservation',
    component: DmtReservationExamComponent,
    canActivate: [DmtAdminGuardGuard],
  },
  {
    path: 'admin/dmt/reservation/exam',
    component:  DmtReservationExamDashboardComponent,
    canActivate: [DmtAdminGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
