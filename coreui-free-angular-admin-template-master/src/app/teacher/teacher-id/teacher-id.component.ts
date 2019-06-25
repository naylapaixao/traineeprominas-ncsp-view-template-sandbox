import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Teacher } from '../../../model/teacher';

@Component({
  selector: 'app-teacher-id',
  templateUrl: './teacher-id.component.html',
  styleUrls: ['./teacher-id.component.scss']
})
export class TeacherIdComponent implements OnInit {

  teacher: Teacher = { id: null, name: '', lastName: '', phd: false };
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getTeacher(this.route.snapshot.params.id);
  }

  getTeacher(id) {
    this.api.getTeacher(id)
      .subscribe(data => {
        this.teacher = data;
        console.log(this.teacher);
        this.isLoadingResults = false;
      });
  }

  deleteTeacher(id) {
    this.isLoadingResults = true;
    this.api.deleteTeacher(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/teacher']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
