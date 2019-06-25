import { Component, OnInit } from '@angular/core';
import { Student } from '../../../model/student';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.scss']
})
export class StudentIdComponent implements OnInit {

  student: Student = { id: null, name: '', lastName: '',  age: null, course: null};
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getStudent(this.route.snapshot.params.id);
  }

  getStudent(id) {
    this.api.getStudent(id)
      .subscribe(data => {
        this.student = data;
        console.log(this.student);
        this.isLoadingResults = false;
      });
  }

  deleteStudent(id) {
    this.isLoadingResults = true;
    this.api.deleteStudent(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/student']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
