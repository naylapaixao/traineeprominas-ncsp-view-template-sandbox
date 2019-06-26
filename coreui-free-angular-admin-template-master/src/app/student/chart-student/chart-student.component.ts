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

  course = [];
  student = [];
  pieChartLabels;
  pieChartData;
  pieChartType;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.api.getCourses()
      .subscribe(res => {
        res.forEach(e => {
          this.course.push(e.name)
          //console.log(this.course)

          this.api.getStudents()
            .subscribe(res => {
              let soma = 0;
              res.forEach(c => { 
                // console.log(">>>>>>>",c.course)
                if(e.id == c.course.id){
                  soma++;
                }
              });
              //console.log('^',soma)
              this.student.push(soma);
            })
        });

        this.plotChart(); 
      });
      
  }

  plotChart(){
    console.log(this.course)
    console.log(this.student)
     this.pieChartLabels = this.course;
     this.pieChartData = this.student; 
     this.pieChartType = 'pie';
  }
  
  //events
 chartClicked(e: any): void {
  // console.log(e);
}
chartHovered(e: any): void {
  // console.log(e);
}
 



}
