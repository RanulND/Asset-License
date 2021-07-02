import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dmt-reservation-medical',
  templateUrl: './dmt-reservation-medical.component.html',
  styleUrls: ['./dmt-reservation-medical.component.css']
})
export class DmtReservationMedicalComponent{

  private medicalReservationCollection: AngularFirestoreCollection<Date>;
  medicalReservations: Observable<Date[]>;
 constructor(private readonly afs: AngularFirestore) {
    this.medicalReservationCollection = afs.collection<Date>('Medical Reservations');
    this.medicalReservations = this.medicalReservationCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() ;
       // const id = a.payload.doc.id;
       // return { id, ...data };
       return{ ...data}
      }))
    );
  }
  days = [{day:"2021/08/01",},{day:"2021/08/02",},{day:"2021/08/03",},{day:"2021/08/04",},{day:"2021/08/05",},{day:"2021/08/06",},{day:"2021/08/07",},];

  dateIdentifyMedical(day){
    localStorage.setItem('specificday', JSON.stringify(day));
  }
}
