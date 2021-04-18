import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PoliceAdminService {

  constructor(
    public fireservice: AngularFirestore
  ) { }

  add_newrecord(record){
    return this.fireservice.collection('reports').add(record);
  }
}
