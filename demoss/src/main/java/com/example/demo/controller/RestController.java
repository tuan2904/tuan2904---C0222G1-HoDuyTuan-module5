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

@org.springframework.web.bind.annotation.RestController
@CrossOrigin
public class RestController {
    @Autowired
    private ITicketService iTicketService;
    @Autowired
    private ICarService carService;

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
    public ResponseEntity<Iterable<Ticket>> oderTicket(@RequestBody Ticket ticket){
        
    }
}
