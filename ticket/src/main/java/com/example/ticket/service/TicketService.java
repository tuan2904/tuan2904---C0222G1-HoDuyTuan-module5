package com.example.ticket.service;

import com.example.ticket.model.Ticket;
import com.example.ticket.repository.ITicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService implements ITicketService {
    @Autowired
    private ITicketRepository iTicketRepository;


    @Override
    public List<Ticket> listTicket() {
        return iTicketRepository.findAll();
    }

    @Override
    public Optional<Ticket> findById() {
        return Optional.empty();
    }

    @Override
    public void create(Ticket ticket) {
        iTicketRepository.save(ticket);
    }
    @Override
    public void update(Ticket ticket) {


    }

    @Override
    public Ticket findById(int id) {
        return iTicketRepository.findById(id);
    }

    @Override
    public List<Ticket> search(String go) {
        return iTicketRepository.search(go);
    }

    @Override
    public void remove(int id) {
        iTicketRepository.deleteById(id);
    }
}
