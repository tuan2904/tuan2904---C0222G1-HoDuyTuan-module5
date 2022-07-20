import {Component, OnInit} from '@angular/core';
import {Facility} from "../facility";


@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  // @ts-ignore
  list: Facility = {}
  lists: Facility[] = [
    {
      name:'villa',url:'https://pix10.agoda.net/hotelImages/4960236/-1/234176640c2cd6269cece15904207baa.jpg?ca=0&ce=1&s=1024x768',
      area:500
      // id: 1, name: 'Villa One', area: 300, cost: 500000, max: 5,
      // rent: 'Năm', type: 'Villa', room: 'VIP', description: 'Good', pool: 30, floors: 3
    },
    {
      name:'villa',url:'https://pix10.agoda.net/hotelImages/4960236/-1/234176640c2cd6269cece15904207baa.jpg?ca=0&ce=1&s=1024x768',
      area:500
    },
    {
      name:'villa',url:'https://pix10.agoda.net/hotelImages/4960236/-1/234176640c2cd6269cece15904207baa.jpg?ca=0&ce=1&s=1024x768',
      area:500
    },
    {
      name:'villa',url:'https://pix10.agoda.net/hotelImages/4960236/-1/234176640c2cd6269cece15904207baa.jpg?ca=0&ce=1&s=1024x768',
      area:500
    },
    {
      name:'villa',url:'https://pix10.agoda.net/hotelImages/4960236/-1/234176640c2cd6269cece15904207baa.jpg?ca=0&ce=1&s=1024x768',
      area:500
    },
    {
      name:'villa',url:'https://pix10.agoda.net/hotelImages/4960236/-1/234176640c2cd6269cece15904207baa.jpg?ca=0&ce=1&s=1024x768',
      area:500
    },

    // {
    //   house: [{
    //     id: '2', name: 'House One', area: 200, cost: 300000, maxPeople: 3,
    //     rent: 'Năm', type: 'House', room: 'normal', description: 'Good', floors: 3
    //   }]
    // },
    // {
    //   Room: [{
    //     id: '3', name: 'Room One', area: 100, cost: 200000, maxPeople: 2,
    //     rent: 'Năm', type: 'Room', free: 'free food'
    //   }]
    // }
  ]

  constructor() {
  }

  ngOnInit(): void {

  }
  addNewArticle() {
    this.lists.push(this.list);
  }

}

