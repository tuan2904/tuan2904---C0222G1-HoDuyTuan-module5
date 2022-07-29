import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Ve} from '../../ve';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  veBus: Ve[];
  busForm = new FormGroup({
    id: new FormControl(),
    gia: new FormControl('', [Validators.required]),
    di: new FormControl('', [Validators.required]),
    den: new FormControl('', [Validators.required]),
    ngay: new FormControl('', [Validators.required]),
    gio: new FormControl('', [Validators.required]),
    ve: new FormGroup({
      idCar: new FormControl(1),
      name: new FormControl()
    }),
    soLuong: new FormControl('', [Validators.required]),
  });
  get gia() {
    return this.busForm.get('gia');
  }

  constructor(private busService: StudentService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  save() {
    const bus = this.busForm.value;
    for (const i of this.veBus) {
      if (i.idCar == bus.ve.idCar) {
        bus.ve.name = i.name ;
        break;
      }
    }
    this.busService.addNew(bus).subscribe(() => {
      // alert('Create thanh cong');
      this.router.navigateByUrl('/list');
      this.busForm.reset();
    });
  }


  findAll() {
    this.busService.getList().subscribe(value => {
      this.veBus = value;
    });
  }
}
