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
  policeRecords: any[] = [];
  
  constructor( public authservice: AuthService, private router: Router, private adminservice: AdminService) { }

  ngOnInit(): void {
    this.authservice.user$.subscribe({
      next: (user) => {
        this.user = user;

        this.adminservice.getAllUserRrecord(user.nic).subscribe(data => {
          this.policeRecords = data.map(snap => {
            return {
              id: snap.payload.doc.id,
              ...snap.payload.doc.data()
            }
          });

          console.log(this.policeRecords);
          this.loading = false;
        })
      },
      error: (err) => {
        console.log(err);
      },
    });
   }

  

}
