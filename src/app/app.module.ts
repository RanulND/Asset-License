import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HomeComponent } from './Container/home/home.component';
import { LoginAdminComponent } from './Container/login-admin/login-admin.component';
import { ContactUsComponent } from './Container/contact-us/contact-us.component';
import { AboutUsComponent } from './Container/about-us/about-us.component';
import { MedicalComponent } from './Container/medical/medical.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginAdminComponent,
    ContactUsComponent,
    AboutUsComponent,
    MedicalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
