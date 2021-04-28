import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/Services/user.model';

@Component({
  selector: 'app-dmt-user',
  templateUrl: './dmt-user.component.html',
  styleUrls: ['./dmt-user.component.css']
})
export class DmtUserComponent implements OnInit {
  status_1: boolean;
  status_2: boolean;
  status_3: boolean;
  status_4: boolean;
  user: any[];
  nic: string;
  constructor(private authservice: AuthService, private adminservice: AdminService) { }

  ngOnInit(): void {
    this.nic = JSON.parse(localStorage.getItem('userNIC'));

    this.adminservice.getUserDmtRecord(this.nic).subscribe({
      next : (data) => {
        this.user = data.map( snap => {
          return {
            id: snap.payload.doc.id,
            ...snap.payload.doc.data()
          } 
        });

        // console.log(this.user);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

}
