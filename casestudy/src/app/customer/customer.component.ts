import {Component, OnInit} from '@angular/core';

class Customer {
  id?: number;
  name?: string;
  birth?: string;
  gender?: string;
  car?: number;
  phone?: number;
  email?: string;
  address?: string;
  type?: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  list: Customer = {}
  lists: Customer [] = [
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
