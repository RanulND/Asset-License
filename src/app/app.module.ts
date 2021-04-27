import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HomeComponent } from './Container/home/home.component';
import { InfoComponent } from './Container/info/info.component';
import { LoginAdminComponent } from './Container/login-admin/login-admin.component';
import { ContactUsComponent } from './Container/contact-us/contact-us.component';
import { AboutUsComponent } from './Container/about-us/about-us.component';
import { MedicalComponent } from './Container/medical/medical.component';
import { LoginComponent } from './Component/login/login.component';
import { UserAccComponent } from './Container/user-acc/user-acc.component';
import { ApplicationComponent } from './Component/application/application.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { SignInPageComponent } from './Container/sign-in-page/sign-in-page.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { SignUpPageComponent } from './Container/sign-up-page/sign-up-page.component';
import { AuthService } from './Services/auth.service';
import { AdminPoliceComponent } from './Component/admin-police/admin-police.component';
import { AdminDMTComponent } from './Component/admin-dmt/admin-dmt.component';
import { DmtUserComponent } from './Container/dmt-user/dmt-user.component';
import { DmtUserDashboardComponent } from './Container/dmt-user-dashboard/dmt-user-dashboard.component';
import { DmtReservationMedicalComponent } from './Container/dmt-reservation-medical/dmt-reservation-medical.component';
import { DmtReservationExamComponent } from './Container/dmt-reservation-exam/dmt-reservation-exam.component';
import { DmtAdminNavbarComponent } from './Component/dmt-admin-navbar/dmt-admin-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    InfoComponent,
    LoginAdminComponent,
    ContactUsComponent,
    AboutUsComponent,
    MedicalComponent,
    LoginComponent,
    UserAccComponent,
    ApplicationComponent,
    SignInComponent,
    SignInPageComponent,
    SignUpComponent,
    SignUpPageComponent,
    AdminPoliceComponent,
    AdminDMTComponent,
    DmtUserComponent,
    DmtUserDashboardComponent,
    DmtReservationMedicalComponent,
    DmtReservationExamComponent,
    DmtAdminNavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
