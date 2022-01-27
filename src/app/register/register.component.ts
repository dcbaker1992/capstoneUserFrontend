import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required),
  })

  constructor(private _router:Router, private _userService: UserService) { }

  ngOnInit(): void {
  }

  moveToLogin(){
    this._router.navigate(['/login'])
  }

  // register(){
  //   if(!this.registerForm.valid){
  //     console.log('invalid');
  //     return;
  //   }
  //   console.log(JSON.stringify(this.registerForm.value));
  // }
  register(){
    this._userService.register(this.registerForm.value).subscribe(data=>{
      console.log(data); this._router.navigate(['/login']);
    })
  }

}
