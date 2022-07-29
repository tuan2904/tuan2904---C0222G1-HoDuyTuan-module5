import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Car} from '../../car';
import {Router} from '@angular/router';
import {TicketService} from '../../service/ticket.service';

class StudentService {
}

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent implements OnInit {
  car: Car[];
  busForm = new FormGroup({
    id: new FormControl(),
    price: new FormControl('', [Validators.required]),
    dayGo: new FormControl('', [Validators.required]),
    dayTo: new FormControl('', [Validators.required]),
    days: new FormControl('', [Validators.required]),
    hour: new FormControl('', [Validators.required]),
    car: new FormGroup({
      id: new FormControl(1),
      name: new FormControl()
    }),
    soLuong: new FormControl('', [Validators.required]),
  });
  get gia() {
    return this.busForm.get('gia');
  }

  constructor(private ticketService: TicketService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  save() {
    const bus = this.busForm.value;
    for (const i of this.car) {
      if (i.id == bus.car.id) {
        bus.ve.name = i.name ;
        break;
      }
    }
    this.ticketService.addNew(bus).subscribe(() => {
      // alert('Create thanh cong');
      this.router.navigateByUrl('/list');
      this.busForm.reset();
    });
  }


  findAll() {
    this.ticketService.getAll().subscribe(value => {
      // @ts-ignore
      this.car = value;
    });
  }
}
