import { Component, OnInit } from '@angular/core';
import {Ticket} from '../../ticket';
import {TicketService} from '../../service/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
ticket: Ticket[];
  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.ticketService.getAll().subscribe(value => {
      this.ticket = value;
    });
  }
}
