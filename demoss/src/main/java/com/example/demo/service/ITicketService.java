package com.example.demo.service;

import com.example.demo.model.Ticket;

import java.util.List;
import java.util.Optional;

public interface ITicketService {
    List<Ticket>listTicket();
    Optional<Ticket> findById();

    void create(Ticket ticket);
    void update(Ticket ticket);
   List <Ticket>   findById(int id);
    List<Ticket> search(Ticket ticket);
}
