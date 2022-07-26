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
    // {id:1,name:'Tuan',birth:'19/09/1996',gender:'Nam',car:222222982,phone:+84983738723,email:'tuan@gmail.com',address:'Đà Nẵng',
    // type:'Diamond,'},
    // {id:2,name:'Nam',birth:'19/09/1999',gender:'Nu',car:222222221,phone:+84222222444,email:'t***@gmail.com',address:'Đà Nẵng',
    //   type:'Platinium,'},
    // {id:3,name:'Lam',birth:'19/09/1998',gender:'Nu',car:222222982,phone:+84277722444,email:'d****@gmail.com',address:'Đà Nẵng',
    //   type:'Member,'}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
