import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { switchMap } from 'rxjs/operators';
import firebase from 'firebase/app';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  userId: string = null;
  authState: boolean = false;
  adminAccess = false;

  constructor(
    public auth: AngularFireAuth,
    private afs: AngularFirestore,
    private route: Router
  ) {
    this.user$ = this.auth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.authState = true;
          if (this.route.url.includes('auth')) {
            this.route.navigate(['/']);
          }
          this.userId = user.uid;
          return this.afs.collection('users').doc<User>(user.uid).valueChanges();
        } else {
          this.userId = null;
          this.route.navigate(['/sign-in']);
          return of({
            email: null,
            uid: null
          } as User);
        }
      })
    );
  }
  async SignIn(provider: 'google' | 'email'): Promise<any> {
    let providerClass;
    const authprovider = firebase.auth;

    switch (provider) {
      case 'google':
        providerClass = new authprovider.GoogleAuthProvider();
        break;
      default:
        break;
    }

    const SignInRes = await this.auth.signInWithPopup(providerClass);
    this.afs.collection('users').doc<User>(SignInRes.user.uid).snapshotChanges().subscribe(res => {
      return this.updateUser(SignInRes.user, res.payload);
    });
  }

  async SignUpWithEmail(email: string, password: string, name: string): Promise<void> {
    const signUpResult = await this.auth.createUserWithEmailAndPassword(email, password);
    return this.updateUser(signUpResult.user, null, name);
  }
  async signInWithEmail(email: string, password: string): Promise<any> {
    const signInResult = await this.auth.signInWithEmailAndPassword(email, password);
    return this.getUser(signInResult.user);
  }

  async signOut(): Promise<boolean> {
    await this.auth.signOut();
    this.authState = false;
    return this.route.navigate(['/']);
  }

  private updateUser(user: firebase.User, DocSnapshot?: DocumentSnapshot<User>, name?: string): Promise<void> {
    let userData: User;
    const firebaseUserData = (({ uid, email, displayName, photoURL }) => ({ uid, email, displayName, photoURL }))(user);

    if (DocSnapshot && DocSnapshot.exists) {
      userData = DocSnapshot.data() as User;
      userData = {
        ...userData,
        ...firebaseUserData
      };
    } else {
      userData = {
        ...userData, // meka balanna error
        ...firebaseUserData,
        isAdmin: false
      };

      if (name) {
        userData = {
          ...userData,
          displayName: name
        }
      }
    }
    return this.afs.collection('users').doc<User>(user.uid).set(userData, {merge: true});
   }

   private getUser(user: firebase.User): Promise<any> {
    return this.afs.collection('users').doc<User>(user.uid).get().toPromise();
  }

  updateUserData(user: User) {
    return this.afs.collection('users').doc<User>(user.uid).update(user);
  }

  get isAuthenticated(): boolean {
    return this.authState;
  }

  get authUserRef(): DocumentReference {
    return this.afs.collection('users').doc<User>(this.userId).ref;
  }
}
