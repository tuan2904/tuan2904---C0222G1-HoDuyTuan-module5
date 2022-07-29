package com.example.demo.service;

import com.example.demo.model.Car;
import com.example.demo.repository.ICarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CarService implements ICarService{
@Autowired
private ICarRepository iCarRepository;
    @Override
    public List<Car> listCar() {
        return iCarRepository.findAll();
    }
}
