import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private route: Router,
    private afs: AngularFirestore
  ) { }

  user = {
    fname: '',
    lname: '',
    nic: '',
    date: '',
    session: ''
    
  };
  
  ngOnInit(): void {
    const user = this.auth.getUserData();
    if(user){
      this.route.navigate(['/']);
    }
  }

  async onSubmit(): Promise<void> {
    if(this.user.fname === '' || this.user.lname === '' || this.user.nic === '' || this.user.date === ''){
      alert("All the fields should have a value");
    }
    else {
      try {
        // await this.auth.
        
        const user = this.auth.getUserData();
       } catch (err) {
          console.log(err);
          alert(err);
        }

    }
    // handleOnKeyDown(e: KeyboardEvent): void {
    //   if (e.key === 'Enter') {
    //     this.onSubmit();
    //   }
  
    // }
  
    // async verify(){
  
    // }
}
}

