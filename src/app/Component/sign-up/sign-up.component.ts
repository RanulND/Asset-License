import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private route: Router,
    private afs: AngularFirestore
  ) { }

  user = {
    name: '',
    email: '',
    password: '',
    nic: ''
    
  };

  ngOnInit(): void {
  }
  async signUpWithEmail(): Promise<void> {
    if(this.user.email === '' || this.user.name === '' || this.user.password === '' || this.user.nic === ''){
      alert("All the fields should have a value");
    }else {
      try {
        await this.auth.SignUpWithEmail(this.user.email, this.user.password, this.user.name, this.user.nic);
        
        const user = this.auth.getUserData();
        if(user.isAdminDMT) {
          this.route.navigate(['/admin/dmt']);
        }else if(user.isAdminPolice) {
          this.route.navigate(['/admin/police']);
        } else {
          this.route.navigate(['/']);
        }
      } catch (err) {
        console.log(err);
        alert(err);
      }
    }
  }

  handleOnKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.signUpWithEmail();
    }

  }

  async verify(){

  }
}
