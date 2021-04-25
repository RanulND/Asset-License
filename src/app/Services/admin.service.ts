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
    return this.fireservice.collection('reports').add(record);
  }

}
