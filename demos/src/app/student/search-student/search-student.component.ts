import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {IStudent} from '../../istudent';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  key = new FormControl();
  studentList: IStudent[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  search() {
    this.studentService.searchByName(this.key.value).subscribe(value => {
      this.studentList = value;
      // console.log(this.studentList);
      this.studentService.studentSearch(this.studentList);
      this.studentList = [];
    });
  }
}
