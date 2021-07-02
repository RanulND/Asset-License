import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-dmt-reservation-exam',
  templateUrl: './dmt-reservation-exam.component.html',
  styleUrls: ['./dmt-reservation-exam.component.css']
})
export class DmtReservationExamComponent{
  private reservationCollection: AngularFirestoreCollection<Date>;
  reservations: Observable<Date[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.reservationCollection = afs.collection<Date>('reservations');
    this.reservations = this.reservationCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() ;
       // const id = a.payload.doc.id;
       // return { id, ...data };
       return{ ...data}
      }))
    );
  }

}
  