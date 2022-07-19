import {Component, OnInit} from '@angular/core';


class Facility {
  id?: number;
  name?: string;
  area?: number
  cost?: number;
  max?: number;
  rent?: string;
  type?: string;
  room?: string;
  description?: string;
  pool?: number;
  floors?: number
}

class customer {
}

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  // public customer:customer[];

  list: Facility = {}
  lists: Facility[] = [
    {

      id: 1, name: 'Villa One', area: 300, cost: 500000, max: 5,
      rent: 'Năm', type: 'Villa', room: 'VIP', description: 'Good', pool: 30, floors: 3

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


}

