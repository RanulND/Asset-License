import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/Services/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  user: User;

  ngOnInit(): void {

    // this.auth.user$.subscribe({
    //   next: (user) => {
    //     this.user = user;
    //   },
    //   error: (err) => {
    //     alert(err);
    //   }
    // });
  }

  signIn() {
    this.router.navigate(['/sign-in']);
  }

  signUp() {
    this.router.navigate(['/sign-up']);
  }

  signOut(){
    this.auth.signOut();
  }

  loginAlert(){
    alert("Please Login to reserve");
  }
}
