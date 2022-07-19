import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: number = 0;
  number2: number = 0;
  result: any;

  constructor() {
  }

  addition() {
    this.result = this.number1 * 1 + this.number2 * 1
  }

  subtraction() {
    this.result = this.number1 - this.number2
  }

  multiplication() {
    this.result = this.number1 * this.number2
  }

  division() {
    this.result = this.number1 / this.number2
  }

  ngOnInit(): void {
  }

}
