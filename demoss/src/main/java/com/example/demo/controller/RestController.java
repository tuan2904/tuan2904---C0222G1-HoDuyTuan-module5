package com.example.demo.controller;

import com.example.demo.model.Car;
import com.example.demo.model.Ticket;
import com.example.demo.service.ICarService;
import com.example.demo.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@org.springframework.web.bind.annotation.RestController()
@CrossOrigin()
public class RestController {
    @Autowired
    private ITicketService iTicketService;
    @Autowired
    private ICarService carService;

    @GetMapping( value = "/list-{id}")
    public ResponseEntity<Iterable<Ticket>> findById(@PathVariable("id") int id) {
        List<Ticket> ticket = iTicketService.findById(id);

        if (ticket.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
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

    @PutMapping(value = "/edit/{id}")
    public ResponseEntity<Iterable<Ticket>> oderTicket(@PathVariable("id") int id, @RequestBody Ticket ticket){
        carService.listCar();
        iTicketService.findById(id);
        iTicketService.update(ticket);
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<>(headers, HttpStatus.OK);
    }
    @GetMapping(value = "/search")
    public ResponseEntity<Iterable<Ticket>> search(Ticket ticket) {
        List<Ticket> tickets = iTicketService.search(ticket);
        if (tickets.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(tickets, HttpStatus.OK);
    }
}
