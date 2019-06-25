import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Course } from '../../../model/course';
import { Teacher } from '../../../model/teacher';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

  dataSource: Teacher[];
  courseForm: FormGroup;
  name = '';
  period = 0;
  city = '';
  teachers: Teacher[];
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getTeacher();
    this.courseForm = this.formBuilder.group({
      name : [null, Validators.required],
      period : [null, [Validators.required]],
      city : [null, Validators.required],
      teachers: [null, Validators.required]
    });
  }

  getTeacher() {
    this.api.getTeachers()
    .subscribe(res => {
      this.dataSource = res;
      this.teachers = this.dataSource.map((item: Teacher) => {
        const teachers = new Teacher();
        teachers.id = item.id;
        teachers.name = item.name;
        teachers.lastName = item.lastName;
        teachers.phd = item.phd;
        return teachers;
      });
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  addCourse(form: NgForm) {
    this.isLoadingResults = true;
    this.api.postCourse(form)
      .subscribe(res => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/course']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
