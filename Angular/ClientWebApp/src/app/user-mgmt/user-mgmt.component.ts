import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-mgmt',
  templateUrl: './user-mgmt.component.html',
  styleUrls: ['./user-mgmt.component.scss']
})
export class UserMgmtComponent implements OnInit {
  allUsrs = new Array<User>();
  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.getallusers()
      .subscribe((data) => {
       this.allUsrs = data;
      console.log("GetAllUsers", data);

    }, errors => {
      console.log("Error", errors);
    });
  }

}
