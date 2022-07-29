// import {Component, OnInit} from '@angular/core';
// import {FormControl, FormGroup} from '@angular/forms';
// import {StudentService} from '../../service/student.service';
// import {IClass} from '../../iclass';
// import {IStudent} from '../../istudent';
// import {ActivatedRoute, Router} from '@angular/router';
//
// @Component({
//   selector: 'app-student-edit',
//   templateUrl: './student-edit.component.html',
//   styleUrls: ['./student-edit.component.css']
// })
// export class StudentEditComponent implements OnInit {
//   // id: number;
//   // classList: IClass[];
//   // students: IStudent;
//   // student: IStudent = {
//   //   id: 0,
//   //   name: '',
//   //   birth: '',
//   //   gender: '',
//   //   class: {
//   //     id: 0,
//   //     name: '',
//   //   }
//   // };
//   // @ts-ignore
//   studentForm = new FormGroup({
//     id: new FormControl(),
//     name: new FormControl(),
//     birth: new FormControl(),
//     gender: new FormControl(),
//     class: new FormGroup({
//       id: new FormControl(),
//       name: new FormControl()
//     }),
//   });
//
//   constructor(private studentService: StudentService,
//               private activatedRoute: ActivatedRoute,
//               private router: Router) {
//
//   }
//
//   // ngOnInit(): void {
//   //   const id = Number(this.activatedRoute.snapshot.params.id);
//   //   this.studentService.findById(id).subscribe(value => {
//   //     this.students = value;
//   //     console.log(this.students);
//   //     this.studentForm.patchValue(this.students);
//   //     console.log(this.studentForm);
//   //   });
//   //   this.getListClass();
//
//   }
//
//   getListClass() {
//     this.studentService.getListClass().subscribe(value => {
//       this.classList = value;
//       // console.log(this.classList);
//     });
//   }
//   onSubmit() {
//     const customer = this.studentForm.value;
//     customer.id = this.students.id;
//     this.studentService.updateStudent(this.students.id, this.studentForm.value).subscribe(() => {
//       alert('update thanh cong');
//       this.router.navigateByUrl('/list');
//       this.studentForm.reset();
//     });
//   }
//
// }
