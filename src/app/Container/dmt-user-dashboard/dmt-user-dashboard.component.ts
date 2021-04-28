import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-dmt-user-dashboard',
  templateUrl: './dmt-user-dashboard.component.html',
  styleUrls: ['./dmt-user-dashboard.component.css']
})
export class DmtUserDashboardComponent implements OnInit {

  constructor(private auth: AuthService, private adminservice: AdminService) { }

  users: any[];
  name: string;
  ngOnInit(): void {
    this.adminservice.getAllusers().subscribe({
      next: (user) => {
        this.users = user.map(snap => {
         return {
          id: snap.payload.doc.id,
          ...snap.payload.doc.data()
         }
        });

        console.log(this.users);
      },
      error: (err) => {
        console.log(err);
      }

    });
  }

}
