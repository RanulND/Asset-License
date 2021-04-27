import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-dmt-admin-navbar',
  templateUrl: './dmt-admin-navbar.component.html',
  styleUrls: ['./dmt-admin-navbar.component.css']
})
export class DmtAdminNavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  signOut(){
    this.auth.signOut();
  }
}
