import { Component, OnInit } from '@angular/core';
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
    private route: Router
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
      await this.auth.SignUpWithEmail(this.user.email, this.user.password, this.user.name, this.user.nic)
      .then(() => this.route.navigate(['/']))
      .catch(err => {
        console.log(err);
        alert(err);
      });
    }
  }

  async signInWithGoogle(): Promise<void> {
    await this.auth.SignIn('google')
    .then(() => this.route.navigate(['/']))
    .catch(err => {
      console.log(err);
      alert(err);
    });
  }

  handleOnKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.signUpWithEmail();
    }

  }
}
