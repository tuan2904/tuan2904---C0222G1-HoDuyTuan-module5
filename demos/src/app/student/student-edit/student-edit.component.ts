import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {IClass} from '../../iclass';
import {IStudent} from '../../istudent';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class  StudentEditComponent implements OnInit {
  id: number;
  classList: IClass[];
  students: IStudent;
  student: IStudent = {
    id: 0,
    gia: 0,
    di: '',
    den: '',
    ngay: '',
    gio: '',
    soLuong: 0,
    ve: {
      id: 0,
      name: ''
    }
  };

  car = new FormGroup({
    id: new FormControl(),
    gia: new FormControl(),
    di: new FormControl(),
    den: new FormControl(),
    ngay: new FormControl(),
    gio: new FormControl(),
    soLuong: new FormControl(),
    ve: new FormGroup({
      id: new FormControl(),
      name: new FormControl()
    }),
  });

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }


  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.studentService.findById(id).subscribe(value => {
      this.students = value;
      console.log(this.students);
      this.car.patchValue(this.students);
      console.log(this.car);
    });
    this.getListClass();

  }

  getListClass() {
    this.studentService.getListClass().subscribe(value => {
      this.classList = value;
    });
  }

  onSubmit() {
    const customer = this.car.value;
    customer.id = this.students.id;
    this.studentService.updateStudent(this.students.id, this.car.value).subscribe(() => {
      alert('Đặt thanh cong');
      this.router.navigateByUrl('/list');
      this.car.reset();
    });
  }

}
