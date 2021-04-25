import { Component, OnInit } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/Services/user.model';


@Component({
  selector: 'app-user-acc',
  templateUrl: './user-acc.component.html',
  styleUrls: ['./user-acc.component.css']
})
export class UserAccComponent implements OnInit {
  user$: Observable<User>

  constructor( public authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  user = {
    name : User.name
  }

}
