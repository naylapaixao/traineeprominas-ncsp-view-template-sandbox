import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Teacher } from '../../../model/teacher';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.scss']
})
export class CourseUpdateComponent implements OnInit {

  dataSource: Teacher[];
  courseForm: FormGroup;
  teachers: Teacher[];
  id: number;
  name: '';
  lastName = '';
  phd = false;
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute,private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    
    this.getTeacher();
    this.getCourse(this.route.snapshot.params.id);
    this.courseForm = this.formBuilder.group({
      name : [null, Validators.required],
      period : [null, Validators.required],
      city : [null, Validators.required],
      teachers : [null, Validators.required]
    });
  }

  getCourse(id) {
    this.api.getCourse(id).subscribe(data => {
      this.id = data.id;
      console.log('>>>>>>',id)
      this.courseForm.setValue({
        name: data.name,
        period: data.period,
        city: data.city,
        teachers: data.teachers
      });
    });
  }

  getTeacher() {
    this.api.getTeachers()
    .subscribe(res => {
      this.dataSource = res;
      this.teachers = this.dataSource.map((item: Teacher) => {
        const teacher = new Teacher();
        teacher.id = item.id;
        teacher.name = item.name;
        teacher.lastName = item.lastName;
        teacher.phd = item.phd;
        return teacher;
      });
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  putCourse(form: NgForm) {
    this.isLoadingResults = true;
    this.api.putCourse(this.id, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/course/' + this.id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
    }

   

}
