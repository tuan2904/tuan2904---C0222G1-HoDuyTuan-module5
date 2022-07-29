import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../service/student.service';
import {FormControl, FormGroup} from '@angular/forms';
import {IClass} from '../../iclass';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  class: IClass[];
  studentForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    birth: new FormControl(),
    gender: new FormControl(),
    class: new FormGroup({
      id: new FormControl(1),
      name: new FormControl()
    })
  });

  constructor(private studentService: StudentService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.findAllClass();
  }

  save() {
    const student = this.studentForm.value;
    for (const i of this.class) {
      if (i.id == student.class.id) {
        student.class.name = i.name;
        break;
      }
    }
    this.studentService.addNew(student).subscribe(() => {
      // alert('Create thanh cong');
      this.router.navigateByUrl('/list');
      this.studentForm.reset();
    });
  }

  findAllClass() {
    this.studentService.getAllClass().subscribe(value => {
      this.class = value;
    });
  }
}
