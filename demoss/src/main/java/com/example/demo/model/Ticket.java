package com.example.demo.model;

import javax.persistence.*;

@Entity(name = "ticketCar")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(columnDefinition = "DOUBLE")
    private String gia;
    @Column(columnDefinition = "VARCHAR(200)")
    private String di;
    @Column(columnDefinition = "VARCHAR(200)")
    private String den;
    @Column(columnDefinition = "VARCHAR(200)")
    private String ngay;
    @Column(columnDefinition = "VARCHAR(200)")
    private String gio;
    @Column(columnDefinition = "DOUBLE")
    private String soLuong;

    @ManyToOne
    @JoinColumn(name = "idCar", referencedColumnName = "idCar")
    private Car car;

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public Ticket() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGia() {
        return gia;
    }

    public void setGia(String gia) {
        this.gia = gia;
    }

    public String getDi() {
        return di;
    }

    public void setDi(String di) {
        this.di = di;
    }

    public String getDen() {
        return den;
    }

    public void setDen(String den) {
        this.den = den;
    }

    public String getNgay() {
        return ngay;
    }

    public void setNgay(String ngay) {
        this.ngay = ngay;
    }

    public String getGio() {
        return gio;
    }

    public void setGio(String gio) {
        this.gio = gio;
    }

    public String getSoLuong() {
        return soLuong;
    }

    public void setSoLuong(String soLuong) {
        this.soLuong = soLuong;
    }
}
