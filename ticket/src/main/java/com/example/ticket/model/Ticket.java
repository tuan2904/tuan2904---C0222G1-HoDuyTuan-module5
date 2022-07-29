package com.example.ticket.model;

import javax.persistence.*;


@Entity(name = "ticket")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(columnDefinition = "DOUBLE")
    private double price;
    @Column(columnDefinition = "VARCHAR(200)")
    private String dayGo;
    @Column(columnDefinition = "VARCHAR(200)")
    private String dayTo;
    @Column(columnDefinition = "VARCHAR(200)")
    private String days;
    @Column(columnDefinition = "VARCHAR(200)")
    private String hour;
    @Column(columnDefinition = "DOUBLE")
    private String count;

    @ManyToOne
    @JoinColumn(name = "idCar", referencedColumnName = "idCar")
    private Car car;

    public Ticket() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDayGo() {
        return dayGo;
    }

    public void setDayGo(String dayGo) {
        this.dayGo = dayGo;
    }

    public String getDayTo() {
        return dayTo;
    }

    public void setDayTo(String dayTo) {
        this.dayTo = dayTo;
    }

    public String getDays() {
        return days;
    }

    public void setDays(String days) {
        this.days = days;
    }

    public String getHour() {
        return hour;
    }

    public void setHour(String hour) {
        this.hour = hour;
    }

    public String getCount() {
        return count;
    }

    public void setCount(String count) {
        this.count = count;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }
}
