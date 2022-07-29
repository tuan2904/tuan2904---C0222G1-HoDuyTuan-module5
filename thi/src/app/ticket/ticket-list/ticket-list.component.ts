import {Component, OnInit} from '@angular/core';
import {Ticket} from '../../ticket';
import {TicketService} from '../../service/ticket.service';
import {log} from 'util';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  ticket: Ticket[];
  tickets: Ticket;
  go: string;
  remove: Ticket = {
    id: 1,
    price: 0,
    dayGo: '',
    dayTo: '',
    days: '',
    hour: '',
    count: 0,
    car: {
      id: 0,
      name: ''
    }
  };

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.findAll();
    // this.getTicket(this.tickets);
  }

  findAll() {
    this.ticketService.getAll().subscribe(value => {
      this.ticket = value;
    });
  }

  delete(id: number) {
    this.ticketService.delete(id).subscribe(
      () => {
        this.findAll();
      }
    );
  }

  getTicket(ticket: Ticket) {
    this.remove = ticket;
  }
  order() {
    if (this.remove.count < 1) {
      alert('Đã hét vé cho chuyến di này');
    } else {
      this.remove.count = this.remove.count - 1;
      this.ticketService.order(this.tickets).subscribe(res => {
        this.findAll();
        alert('Đã đặt vé cho chuyến di này');
      });
    }
  }
  search() {
    this.ticketService.searchByDestination(this.go).subscribe((list: any) => {
      if (list != null) {
        this.ticketService = list.content;
      } else {
        alert('Không tìm thấy vé');
      }
    });
  }

}
