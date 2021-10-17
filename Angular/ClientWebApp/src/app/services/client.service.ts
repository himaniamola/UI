import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly baseUrl: string = "http://localhost:54706/api/client/";
  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string) {
    const body = {
      UserName: username,
      Password: password
    };

    return this.httpClient.post(this.baseUrl + "Login", body);
  }

  public registeruser(username: string, email: string, password: string) {
    const body = {
      FullName: username,
      Email: email,
      Password: password
    };
    return this.httpClient.post(this.baseUrl + "RegisterUser", body);
  }

  public getallusers() {
    const header = new HttpHeaders(
      {
        'Authorization': `Bearer ${localStorage.getItem("userAuthToken")}`
      });    

    return this.httpClient.get(this.baseUrl + "GetAllUsers", { headers: header }).pipe(map((p: any) => {
      let allUsrs = new Array<User>();
      Object.keys(p).map(function (key) {
        var item = p[key];
        allUsrs.push(new User(item["fullName"], item["email"] ));
      });

      return allUsrs;
    }));
  }
}
