import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-dmt-reservation-medical-dashboard',
  templateUrl: './dmt-reservation-medical-dashboard.component.html',
  styleUrls: ['./dmt-reservation-medical-dashboard.component.css']
})
export class DmtReservationMedicalDashboardComponent implements OnInit {

  medicalReservations: any[];
  Date: string;
    constructor(private authservice: AuthService, private adminservice: AdminService) { }
  
    ngOnInit(): void {
      this.Date = JSON.parse(localStorage.getItem('specificday'));
  
      this.adminservice.getAdminDmtMedicalRecord(this.Date).subscribe({
        next : (data) => {
          this.medicalReservations= data.map( snap => {
            return {
              id: snap.payload.doc.id,
              ...snap.payload.doc.data()
            } 
          });
  
           console.log(this.medicalReservations);
        },
        error: (err) => {
          console.log(err);
        }
      });
  
    }
}
