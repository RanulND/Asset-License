import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    public fireservice: AngularFirestore
  ) { }

  addNewPoliceRecord(record){
    return this.fireservice.collection('reports').add(record); // seperate collection
    // return this.fireservice.collection('users').doc(record.nic).collection('reports').add(record);
  }

  addNewDmtRecord(record){
    return this.fireservice.collection('dmt').add(record); // call karanna ona
  }

  getAllPoliceReports() {
    return this.fireservice.collection<any>('reports').snapshotChanges();
  }

  getAllUserPoliceRecord(nic) {
    return this.fireservice.collection<any>('reports', ref => ref.where('nic', '==', nic)).snapshotChanges();
    // return this.fireservice.collection('users').doc(nic).collection('reports').valueChanges({ idField: 'id' });
  }

  getAllusers(){
    return this.fireservice.collection<any>('users').snapshotChanges();
  }

  getUserDmtRecord(nic){
    return this.fireservice.collection<any>('users', ref => ref.where('nic', "==", nic)).snapshotChanges();
  }
}
