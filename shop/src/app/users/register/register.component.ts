import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/Service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ourValidation;
  username: string = "";
  address: string = "";
  email: string = "";
  password: any;

  constructor(public myServices: UserService, public router: Router) {
    // this.userId = this.myActivated.snapshot.params['id']
    this.ourValidation = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormControl('', [Validators.minLength(3)]),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.minLength(5)]),
    });

  }

  get getUsername() {
    return this.ourValidation.controls['username'];
  }
  get getAddress() {
    return this.ourValidation.controls['address'];
  }
  get getEmail() {
    return this.ourValidation.controls['email'];
  }
  get getPassword() {
    return this.ourValidation.controls['password'];
  }


  CreateUser() {
    var user: { username: string, address: string, email: string, password: any } = {
      username: this.username,
      address: this.address,
      email: this.email,
      password: this.password,
    }
    this.myServices.getAllUsers().subscribe(
      (response) => {


        const userex = response.find((a: any) => {
          return a.email === user.email;
        });

        if (userex) {
          alert("email already exist");
        }
        else {
          this.myServices.addUser(user).subscribe(
            (response) => {
              console.log(response);
            },
            (error) => {
              alert(error);
            }
          )

          this.router.navigate(['login']); /// change the login to home
        }
      },
      (error) => {
        alert(error);
      }



    )

  }






  ngOnInit(): void {



    // this.myServices.addUser(this.user).subscribe(

    //   (response) => {


    //     this.user = response;

    //   },
    //   (error) => {
    //     console.log(error);

    //   }
    // )


    // this.myServices.getUserById(this.userId).subscribe(

    //   (response) => {


    //     this.user = response;

    //   },
    //   (error) => {
    //     console.log(error);

    //   }
    // )
  }

}
