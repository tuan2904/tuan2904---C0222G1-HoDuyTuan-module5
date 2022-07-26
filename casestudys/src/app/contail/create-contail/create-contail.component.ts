import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-contail',
  templateUrl: './create-contail.component.html',
  styleUrls: ['./create-contail.component.css']
})
export class CreateContailComponent implements OnInit {

  contractForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      start: new FormControl('', Validators.required),
      end: new FormControl('', Validators.required),
      deposit: new FormControl('', Validators.required),
      employee: new FormControl('', Validators.required),
      customer: new FormControl('', Validators.required),
      facility: new FormControl('', Validators.required),
    },
  );

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  get id() {
    return this.contractForm.get('id');
  }

  get start() {
    return this.contractForm.get('start');
  }

  get end() {
    return this.contractForm.get('end');
  }

  get employee() {
    return this.contractForm.get('employee');
  }

  get customer() {
    return this.contractForm.get('customer');
  }

  get deposit() {
    return this.contractForm.get('deposit');
  }

  get facility() {
    return this.contractForm.get('facility');
  }

}
