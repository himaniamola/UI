import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  msg: string = "";
  public registerForm = this.formBuilder.group({
    username: ['username', Validators.required],
    email: ['email',  [Validators.email, Validators.required] ],
    password: ['password', Validators.required]
  });
  constructor(private formBuilder: FormBuilder, private clientService: ClientService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Submitted");
    let userName = this.registerForm.get('username')?.value;
    let email = this.registerForm.get('email')?.value;
    let pwd = this.registerForm.get('password')?.value;
    this.clientService.registeruser(userName, email, pwd).subscribe((data) => {
      this.msg = JSON.stringify(data);
    }, errors => {
        console.log("Error", errors);
    });
  }
}
