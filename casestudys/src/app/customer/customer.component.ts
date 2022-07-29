import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../service/customer.service';


// tslint:disable-next-line:no-empty-interface
export interface Type {
  id: number;
  name: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  lists: Customer [];
  type: Type[];

  remove: Customer = {
    id: 0,
    name: '',
    birth: '',
    gender: '',
    car: 0,
    phone: 0,
    email: '',
    address: '',
    type: {
      id: 0,
      name: ''
    }

  };

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.customerService.getAll().subscribe(value => {
      this.lists = value;
    });
  }

  delete(id: number) {
    this.customerService.delete(id).subscribe(
      () => {
        this.findAll();
      }
    );
  }

  getCustomer(customer: Customer) {
    this.remove = customer;
  }
}
