package com.example.demo.controller;

import com.example.demo.model.Ticket;
import com.example.demo.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
@org.springframework.web.bind.annotation.RestController
@CrossOrigin
public class RestController {
    @Autowired
    private ITicketService iTicketService;

    @GetMapping(value = "/list")
    public ResponseEntity<Iterable<Ticket>> findAllBlog() {
        List<Ticket> blogModels = iTicketService.listTicket();
        if (blogModels.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(blogModels, HttpStatus.OK);
    }
}
