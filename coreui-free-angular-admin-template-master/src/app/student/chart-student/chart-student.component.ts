import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Student } from '../../../model/student';
import { Course } from '../../../model/course';

@Component({
  selector: 'app-chart-student',
  templateUrl: './chart-student.component.html',
  styleUrls: ['./chart-student.component.scss']
})
export class ChartStudentComponent implements OnInit {

  isLoadingResults: boolean;
  data = Student;
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.api.getStudents()
      .subscribe(res => {
        this.data;
        console.log(res);
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  // Pie
  public pieChartLabels: string[] = ['Matematica', 'Engenharia da Computação', 'Engenharia Elétrica'];
  public pieChartData: number[] = [300]; 
  public pieChartType = 'pie';



}
