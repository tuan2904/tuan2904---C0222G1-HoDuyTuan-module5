import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

interface Country {
  id?: number,
  name?: string
}

export interface FormEmail {
  email: string;
  password: string;
  confirmPassword: string;
  country: boolean;
  age: string;
  gender: string;
  phone: string;
}



const confirmPwValidator = control => {
  let newPass = control.get('password').value; // add .value
  let confirmPass = control.get('confirmPassword').value; // add .value
  return newPass === confirmPass ? null : {confirmNewPassword: true };
}

const date = control => {
  let newPass = control.get('password').value; // add .value
  let confirmPass = control.get('confirmPassword').value; // add .value
  return newPass === confirmPass ? null : {confirmNewPassword: true };
}
@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  contractForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    country: new FormControl('', Validators.required),
    age: new FormControl('', this.checkAge18),
    gender: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.minLength(6)]),
  },{validators: confirmPwValidator},
  )


  get email() {
    return this.contractForm.get('email');
  }

  get password() {
    return this.contractForm.get('password');
  }

  get confirmPassword() {
    return this.contractForm.get('confirmPassword');
  }

  get country() {
    return this.contractForm.get('country');
  }

  get age() {
    return this.contractForm.get('age');
  }

  get gender() {
    return this.contractForm.get('gender');
  }

  get phone() {
    return this.contractForm.get('phone');
  }

  lists: FormEmail = {age: "", confirmPassword: "", country: false, email: "", gender: "", password: "", phone: ""};
  list: FormEmail[]=[

  ]

  model;
  countrys: Country = {};
  listCountry: Country[] = [
    {id: 1, name: 'Việt Nam'},
    {id: 2, name: 'Mỹ'}
  ]


  constructor() {
    this.model = {
      gender: "female",
      genders: "male"
    }
  }

  ngOnInit(): void {
    console.log(this.contractForm.value)
  }

  onSubmit() {
  }
    checkAge18(abstractControl:AbstractControl){
    const sYear=abstractControl.value.substr(6,9);
    const curYear=new Date().getFullYear()
    return curYear-sYear>=18 ?null:{not18:true}
  }
}
