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
  
  // alert = false;
  // alertMsg : string;

  ngOnInit(): void {
  }

  async signInWithEmail(): Promise<void> {
    if (this.user.email === ''  || this.user.password === ''){
      // this.alert = true;
      // this.alert
      alert("Email or Password fields cannot be empty");
    }else {
      this.auth.signInWithEmail(this.user.email, this.user.password)
      .then(() => this.route.navigate(['/']))
      .catch(err => {
        console.log(err);
        alert(err);
      });
    }
  }

  // async signInWithGoogle(): Promise<void> {
  //   await this.auth.SignIn('google')
  //   .then(() => this.route.navigate(['/']))
  //   .catch(err => {
  //     console.log(err);
  //     alert(err);
  //   });
  // }

}
