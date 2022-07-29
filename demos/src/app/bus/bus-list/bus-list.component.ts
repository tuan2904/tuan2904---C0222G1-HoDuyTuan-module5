import {Component, OnInit} from '@angular/core';

import {XeService} from '../../service/xe.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  // bus: Bus[];
  // list: Bus = {
  //   id: 0,
  //   gia: 0,
  //   di: '',
  //   den: '',
  //   ngay: '',
  //   gio: '',
  //   soLuong: 0,
  //   ve: {
  //     id: 0,
  //     name: ''
  //   }
  // };
  constructor(private busService: XeService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.busService.getAll().subscribe(value => {
      // this.bus = value;
      // console.log(this.bus);
    });
  }
}
