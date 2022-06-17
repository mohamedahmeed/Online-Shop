import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, public myServices: UserService, public router: Router) {

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }


  login() {



    this.myServices.getAllUsers().subscribe(
      (response) => {



        const user = response.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
        });
        if (user) {
          console.log("login success");
          this.loginForm.reset();
          this.router.navigate(['/home']); /// change the register to home
        }
        else {
          alert("notfound");
        }


      },
      (error) => {
        alert(error);
        console.log(error);

      }



    )
  }



}
