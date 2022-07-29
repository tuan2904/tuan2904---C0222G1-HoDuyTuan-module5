import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {
  customerForm = new FormGroup({
      id: new FormControl('', [Validators.email, Validators.required]),
      name: new FormControl(),
      birth: new FormControl(),
      gender: new FormControl('', Validators.required),
      car: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required])
    }
  );

  get id() {
    return this.customerForm.get('id');
  }

  get name() {
    return this.customerForm.get('name');
  }

  get birth() {
    return this.customerForm.get('birth');
  }

  get gender() {
    return this.customerForm.get('gender');
  }

  get car() {
    return this.customerForm.get('car');
  }

  get phone() {
    return this.customerForm.get('phone');
  }

  get email() {
    return this.customerForm.get('email');
  }

  get address() {
    return this.customerForm.get('address');
  }

  get type() {
    return this.customerForm.get('type');
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
