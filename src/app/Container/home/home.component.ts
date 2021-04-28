import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/Services/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(public authservice: AuthService) { }

  ngOnInit(): void {
    this.authservice.user$.subscribe({
      next: (user) => {
        this.user = user;
        // this.loading = false;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  loginAlert(){
    alert("Please Login to reserve");
  }
}
