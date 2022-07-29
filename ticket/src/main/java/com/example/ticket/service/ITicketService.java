package com.example.ticket.service;


import com.example.ticket.model.Ticket;

import java.util.List;
import java.util.Optional;

public interface ITicketService {
    List<Ticket> listTicket();

    Optional<Ticket> findById();

    void create(Ticket ticket);

    void update(Ticket ticket);

    Ticket findById(int id);

    List<Ticket> search(String go);
    void remove(int id);

}
