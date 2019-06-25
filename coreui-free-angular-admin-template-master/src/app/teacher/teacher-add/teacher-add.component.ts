import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.scss']
})
export class TeacherAddComponent implements OnInit {

  teacherForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.teacherForm = this.formBuilder.group({
      name : [null, Validators.required],
      lastName : [null, [Validators.required]],
      phd : [null, Validators.required]
    });
  }

  addTeacher(form: NgForm) {
    this.isLoadingResults = true;
    this.api.postTeacher(form)
      .subscribe(res => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/teacher']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
