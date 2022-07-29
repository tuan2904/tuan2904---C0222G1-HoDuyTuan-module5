package com.example.ticket.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "car")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idCar;
    @Column(columnDefinition = "VARCHAR(200)")
    private String name;

    @OneToMany(mappedBy = "car")
    @JsonBackReference
    private Set<Ticket> tickets;
//
    public Car() {
    }

    public int getId() {
        return idCar;
    }

    public void setId(int idCar) {
        this.idCar = idCar;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(Set<Ticket> tickets) {
        this.tickets = tickets;
    }
}
