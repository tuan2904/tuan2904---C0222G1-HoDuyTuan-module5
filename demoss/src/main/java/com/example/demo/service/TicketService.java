package com.example.demo.service;

import com.example.demo.model.Ticket;
import com.example.demo.repository.ITicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
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
        iTicketRepository.editTicket(ticket.getDen(), ticket.getDi(),ticket.getGia(), ticket.getGio(), ticket.getNgay(), ticket.getSoLuong(),
                ticket.getCar().getId(), ticket.getId());

    }

    @Override
    public List<Ticket> findById(int id) {
        return iTicketRepository.findById(id);
    }

    @Override
    public List<Ticket> search(Ticket ticket) {
        return (List<Ticket>) iTicketRepository.search(ticket.getDen());
    }
}
