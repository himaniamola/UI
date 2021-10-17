import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let userName = this.loginForm.get('username')?.value;
    let pwd = this.loginForm.get('password')?.value;
    this.clientService.login(userName, pwd).subscribe((data:any) => {
      console.log("Logged In ");
      if (data) {
        if (data.token) {
          localStorage.setItem("userAuthToken", data.token);
          this.router.navigate(['/user-mgmt']);
        }
      }

    }, errors => {
      console.log("Error", errors);
    });
  }
}
