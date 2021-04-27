import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { switchMap } from 'rxjs/operators';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  userId: string = null;
  authState: boolean = false;

  constructor(
    public auth: AngularFireAuth,
    private afs: AngularFirestore,
    private route: Router
  ) {
    this.user$ = this.auth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.authState = true;
          this.userId = user.uid;
          return this.afs.collection('users').doc<User>(user.uid).valueChanges();
        } else {
          this.userId = null;
          return of({
            email: null,
            uid: null,
            nic: null
          } as User);
        }
      })
    );
  }
 

  async SignUpWithEmail(email: string, password: string, name: string, nic: string): Promise<void> {
    const signUpResult = await this.auth.createUserWithEmailAndPassword(email, password);

    let userData: User;
    const firebaseUserData = (({ uid, email }) => ({ uid, email }))(signUpResult.user);

    userData = {
      ...firebaseUserData,
      isAdminPolice: false,
      isAdminDMT: false,
      nic: nic,
      displayName: name,
      // policeRecord: []
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    // this.setToken(nic);
    return this.afs.collection('users').doc<User>(userData.uid).set(userData, {merge: true});
  }
  
  async signInWithEmail(email: string, password: string) {
    const signInResult = await this.auth.signInWithEmailAndPassword(email, password);
    return this.getUser(signInResult.user);
  }

  async signOut(): Promise<boolean> {
    await this.auth.signOut();
    this.authState = false;
    localStorage.removeItem('userData');
    return this.route.navigate(['/']);
  }

  private getUser(user: firebase.User) {
    return this.afs.collection<User>('users').doc(user.uid).get();
  }

  updateUserData(user: Partial<User>) {
    return this.afs.collection('users').doc<User>(user.uid).update(user);
  }

  get isAuthenticated(): boolean {
    return this.authState;
  }

  get authUserRef(): DocumentReference {
    return this.afs.collection('users').doc<User>(this.userId).ref;
  }

  nic_verify(nic: string){
    
  }

  getUserData(): User {
    return JSON.parse(localStorage.getItem('userData')) as User;
  }

  get isDmtAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('userData')) as User;
    if(user)
      return user.isAdminDMT;
    else
      return false;
  }

  get isPoliceAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('userData')) as User;
    if(user)
      return user.isAdminPolice;
    else
      return false;
  }

  get isUser(): boolean {
    const user = JSON.parse(localStorage.getItem('userData')) as User;
    if(!user){
      return true;
    }
    if(user.isAdminDMT || user.isAdminPolice){
      return false;
    }else
      return true;
  }
  // private setToken(nic: string) {
  //   localStorage.setItem('token', nic);
  // }

  // private getToken() {
  //   const token = localStorage.getItem('token');
  //   let intervalFunc;

  //   if(token && token !== '')
  //     return localStorage.getItem('token');
  //   else {
  //     intervalFunc = setInterval(() => {
  //       if(token && token !== '') {
  //         clearInterval(intervalFunc);
  //         return localStorage.getItem('token');
  //       }
  //     })
  //   }
  // }

  // private clearToken() {
  //   localStorage.removeItem('token');
  // }
// authstate: any = null;
  
//   constructor(
//     public auth: AngularFireAuth,
//     private afs: AngularFirestore,
//     private route: Router
//   ) {
//     this.auth.authState.subscribe((auth) => {
//       this.authstate = auth;
//     })
//    }

//    async SignUpWithEmail(email: string, password: string, name: string, nic: string): Promise<void> {
//       const signUpResult = await this.auth.createUserWithEmailAndPassword(email, password);
//       return this.updateUser(signUpResult.user, null, name, nic);
// }

// async signInWithEmail(email: string, password: string): Promise<any> {
//     const signInResult = await this.auth.signInWithEmailAndPassword(email, password);
//     return this.getUser(signInResult.user);
//   }

// private updateUser(user: firebase.User, DocSnapshot?: DocumentSnapshot<User>, name?: string, nic?: string): Promise<void> {
//     let userData: User;
//     const firebaseUserData = (({ uid, email, displayName, photoURL,}) => ({ uid, email, displayName, photoURL}))(user);

//     if (DocSnapshot && DocSnapshot.exists) {
//       userData = DocSnapshot.data() as User;
//       userData = {
//         ...userData,
//         ...firebaseUserData
//       };
//     } else {
//       userData = {
//         ...userData, // meka balanna error
//         ...firebaseUserData,
//         isAdminPolice: false,
//         isAdminDMT: false
//       };

//       if (name) {
//         userData = {
//           ...userData,
//           displayName: name
//         }
//       }

//       if (nic) {
//         userData = {
//           ...userData,
//           nic: nic
//         }
//       }
//     }
//     return this.afs.collection('users').doc<User>(user.uid).set(userData, {merge: true});
//    }


}
