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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
