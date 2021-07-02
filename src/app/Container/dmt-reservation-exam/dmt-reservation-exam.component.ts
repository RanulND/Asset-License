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
  private examReservationCollection: AngularFirestoreCollection<Date>;
  examReservations: Observable<Date[]>;
 constructor(private readonly afs: AngularFirestore) {
    this.examReservationCollection = afs.collection<Date>('reservations');
    this.examReservations = this.examReservationCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() ;
       // const id = a.payload.doc.id;
       // return { id, ...data };
       return{ ...data}
      }))
    );
  }
  days = [{day:"2021/08/01",},{day:"2021/08/02",},{day:"2021/08/03",},{day:"2021/08/04",},{day:"2021/08/05",},{day:"2021/08/06",},{day:"2021/08/07",},];

  dateIdentify(day){
    localStorage.setItem('specificday', JSON.stringify(day));
  }
}

