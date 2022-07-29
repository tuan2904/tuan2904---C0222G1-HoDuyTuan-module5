import {Component, OnInit} from '@angular/core';
import {IStudent} from '../istudent';
import {StudentService} from '../service/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  student: IStudent[];

  IStudent = {
    id: 0,
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

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.findAll();
    this.StudentListSearch();
  }

  findAll() {
    this.studentService.getAll().subscribe(value => {
      this.student = value;
    });
  }

  delete(id: number) {
    this.studentService.delete(id).subscribe(
      () => {
        this.findAll();
      }
    );
  }

  // getCustomer(student: IStudent) {
  //   this.remove = student;
  // }

  StudentListSearch() {
    this.studentService.channelSearch.subscribe(value => {
      if (value !== undefined) {
        this.student = value;
      }
    });
  }
}
