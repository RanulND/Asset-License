import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-admin-police',
  templateUrl: './admin-police.component.html',
  styleUrls: ['./admin-police.component.css']
})
export class AdminPoliceComponent implements OnInit {

  reports: string;
  nic: string;
  violation: string;
  date: Date;

  constructor(public policeAdminService: AdminService, private auth: AuthService) { }

  ngOnInit(): void {
  } 

  addRecord(){
    let record = {};
    record['nic'] = this.nic;
    record['violation'] = this.violation;
    record['date'] = this.date;

    this.policeAdminService.addNewPoliceRecord(record).then(res => {
      this.nic = "";
      this.date = undefined;
      this.violation= "";
      // console.log(res);
      alert("Record has been uploaded successfully");
    }).catch(err => {
      console.log(err);
      alert(err);
    });
  }

  signOut(){
    this.auth.signOut();
  }
}
