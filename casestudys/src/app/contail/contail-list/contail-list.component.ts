import {Component, OnInit} from '@angular/core';
import {Contract} from '../../contract';

@Component({
  selector: 'app-contail-list',
  templateUrl: './contail-list.component.html',
  styleUrls: ['./contail-list.component.css']
})
export class ContailListComponent implements OnInit {
  // @ts-ignore
  listContract: Contract = {};
  lists: Contract[] = [
    {id: 1, start: '12/12/2021', end: '01/02/2022', deposit: 2000000, customer: 'Tuan', facility: 'Villa', employee: 'Hai'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
