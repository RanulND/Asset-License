import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private route: Router
  ) { }

  user = {
    email: '',
    password: ''
  };

  ngOnInit(): void {
    const user = this.auth.getUserData();
    if(user) {
      if(user.isAdminDMT) {
        this.route.navigate(['/admin/dmt']);
      }else if(user.isAdminPolice) {
        this.route.navigate(['/admin/police']);
      } else {
        this.route.navigate(['/']);
      }
    }   
  }

  async signInWithEmail(): Promise<void> {
    if (this.user.email === ''  || this.user.password === ''){
      alert("Email or Password fields cannot be empty");
    }else {
      try {
        const res = await this.auth.signInWithEmail(this.user.email, this.user.password);
        res.subscribe({
          next: (data) => {
            const user = data.data();
            localStorage.setItem('userData', JSON.stringify(user));
            if(user.isAdminDMT) {
              this.route.navigate(['/admin/dmt']);
            }else if(user.isAdminPolice) {
              this.route.navigate(['/admin/police']);
            } else {
              this.route.navigate(['/']);
            }
          }
        });
      } catch (err) {
        console.log(err);
        alert(err);
      }
    }
  }

}
