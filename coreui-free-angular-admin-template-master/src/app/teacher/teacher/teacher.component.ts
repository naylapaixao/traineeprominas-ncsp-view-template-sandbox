import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Teacher } from '../../../model/teacher';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'lastName', 'phd', 'action'];
  dataSource: MatTableDataSource<Teacher>;
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.api.getTeachers()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource<Teacher>(res);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
