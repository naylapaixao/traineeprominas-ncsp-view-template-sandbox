import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-chart',
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.scss']
})
export class UserChartComponent implements OnInit {
  admin = 0;
  guess = 0;

  barChartOptions;
  barChartLabels;
  barChartType;;
  barChartLegend = true; 
  barChartData;


  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.api.getUsers()
      .subscribe(res => {
       
        res.forEach(e => {
          if(e.profile == 'admin'){
            console.log(this.admin);
            this.admin++;
          }else{
            this.guess++;
          }
        });
        this.plotChart(); 
      });
     
  }

 plotChart(){
   // barChart
  this.barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
   this.barChartLabels= ['profile'];
   this.barChartType = 'bar';
   this.barChartLegend = true;

  
   this.barChartData = [
    {data: [this.admin,0], label: 'Admin'},
    {data: [this.guess,0], label: 'Guess'}
  ];
 }

 //events
 chartClicked(e: any): void {
   // console.log(e);
 }
 chartHovered(e: any): void {
   // console.log(e);
 }
  


}
