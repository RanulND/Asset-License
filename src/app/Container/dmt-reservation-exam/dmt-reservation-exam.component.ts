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
  getUnique(array){
    var uniqueArray = [];
    
    // Loop through array values
    for(var i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}
  reservations: getUnique(Observable<Date[]>;
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
  