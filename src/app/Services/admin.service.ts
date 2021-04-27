import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    public fireservice: AngularFirestore
  ) { }

  add_new_police_record(record){
    return this.fireservice.collection('reports').add(record); // seperate collection
    // return this.fireservice.collection('users').doc(record.nic).collection('reports').add(record);
  }

  add_new_dmt_record(record){
    return this.fireservice.collection('dmt').add(record);
  }

  getAllRecord() {
    return this.fireservice.collection<any>('reports').snapshotChanges();
  }

  getAllUserRrecord(nic) {
    return this.fireservice.collection<any>('reports', ref => ref.where('nic', '==', nic)).snapshotChanges();
    // return this.fireservice.collection('users').doc(nic).collection('reports').valueChanges({ idField: 'id' });
  }

}
