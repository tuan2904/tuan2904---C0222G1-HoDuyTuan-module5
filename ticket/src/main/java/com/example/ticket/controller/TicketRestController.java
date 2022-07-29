package com.example.ticket.controller;

import com.example.ticket.model.Car;
import com.example.ticket.model.Ticket;
import com.example.ticket.service.ICarService;
import com.example.ticket.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
public class TicketRestController {
    @Autowired
    private ITicketService iTicketService;
    @Autowired
    private ICarService carService;

    @GetMapping(value = "/list/{id}")
    public ResponseEntity<Ticket> findById(@PathVariable("id") int id) {
        Ticket ticket = iTicketService.findById(id);

        return new ResponseEntity<>(ticket, HttpStatus.OK);
    }

    @GetMapping(value = "/list")
    public ResponseEntity<Iterable<Ticket>> findAllTicket() {
        List<Ticket> tickets = iTicketService.listTicket();
        if (tickets.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(tickets, HttpStatus.OK);
    }

    @GetMapping(value = "/list-car")
    public ResponseEntity<Iterable<Car>> findAllCar() {
        List<Car> car = carService.listCar();
        if (car.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Iterable<Ticket>> addNew(@RequestBody Ticket ticket) {
        carService.listCar();
        iTicketService.create(ticket);
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<>(headers, HttpStatus.CREATED);
    }
    @PutMapping(value = "/order")
    public ResponseEntity<Ticket> orderTicket(@RequestBody Ticket ticket ){
        iTicketService.create(ticket);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(value = "/edit/{id}")
    public ResponseEntity<Iterable<Ticket>> oderTicket(@PathVariable("id") int id, @RequestBody Ticket ticket) {
        carService.listCar();
        iTicketService.findById(id);
        iTicketService.update(ticket);
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<>(headers, HttpStatus.OK);
    }

    @GetMapping("/search/{go}")
    public ResponseEntity<Iterable<Ticket>> searchByDestination(
                                                 @PathVariable("go") String go) {
        List<Ticket> tickets = iTicketService.search(go);
        return new ResponseEntity<>(tickets,HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<Ticket> deleteCustomer(@PathVariable("id") int id) {
        Ticket ticket = iTicketService.findById(id);
        if (ticket == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        iTicketService.remove(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

