import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-dmt-reservation-exam-dashboard',
  templateUrl: './dmt-reservation-exam-dashboard.component.html',
  styleUrls: ['./dmt-reservation-exam-dashboard.component.css']
})
export class DmtReservationExamDashboardComponent implements OnInit {
reservations: any[];
Date: string;
  constructor(private authservice: AuthService, private adminservice: AdminService) { }

  ngOnInit(): void {
    this.Date = JSON.parse(localStorage.getItem('specificday'));

    this.adminservice.getAdminDmtRecord(this.Date).subscribe({
      next : (data) => {
        this.reservations= data.map( snap => {
          return {
            id: snap.payload.doc.id,
            ...snap.payload.doc.data()
          } 
        });

         console.log(this.reservations);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

}
