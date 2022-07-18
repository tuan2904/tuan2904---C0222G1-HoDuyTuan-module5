import {Component, OnInit} from '@angular/core';
import {style} from "@angular/animations";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color: string;
  colors: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  blu() {
    this.colors = "blue";
  }
  green() {
    this.colors = "green";
  }
  red() {
    this.colors = "red";
  }
  notTick() {
    this.colors="black";
  }
}
