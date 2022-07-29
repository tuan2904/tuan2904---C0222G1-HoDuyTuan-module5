package com.example.demo.service;

import com.example.demo.model.Ticket;
import com.example.demo.repository.ITicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService implements ITicketService {
    @Autowired
    private ITicketRepository iTicketRepository;


    @Override
    public List<Ticket> listTicket() {
        return iTicketRepository.findAll();
    }
}
