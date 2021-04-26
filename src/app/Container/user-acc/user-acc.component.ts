import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/Services/user.model';


@Component({
  selector: 'app-user-acc',
  templateUrl: './user-acc.component.html',
  styleUrls: ['./user-acc.component.css']
})
export class UserAccComponent implements OnInit {
  user: User;
  loading = true;
  policeRecords: {
    // id: string;
    // date:Date;
    // violation: string;

  };
  
  constructor( public authservice: AuthService, private router: Router, private adminservice: AdminService) { }

  ngOnInit(): void {
    this.authservice.user$.subscribe({
      next: (user) => {
        this.user = user;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
      },
    });

  //   this.adminservice.getAllUserRrecord(this.user.nic).subscribe(data => {
  //     this.policeRecords = data.map(e => {
  //       return {
  //         id: e.payload.doc.id,
  //         date: e.payload.doc.data()['date'],
  //         violation: e.payload.doc.data()['violation']
  //       };
  //     })
  //   })

  this.adminservice.getAllUserRrecord(this.user.nic).subscribe({
    next: (docs) => {
      docs.forEach(doc => {
        let date = doc.date;
        let violation = doc.violation;
      });
    }
  });

   }

  

}
