import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user/user.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatPaginatorModule,
  MatToolbarModule } from '@angular/material';
import { UseIdComponent } from './user/use-id/use-id.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { TeacherComponent } from './teacher/teacher/teacher.component';
import { TeacherIdComponent } from './teacher/teacher-id/teacher-id.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TeacherUpdateComponent } from './teacher/teacher-update/teacher-update.component';
import { CourseComponent } from './course/course/course.component';
import { CourseIdComponent } from './course/course-id/course-id.component';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { CourseUpdateComponent } from './course/course-update/course-update.component';
import { StudentComponent } from './student/student/student.component';
import { StudentIdComponent } from './student/student-id/student-id.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { ChartStudentComponent } from './student/chart-student/chart-student.component';
import { UserChartComponent } from './user/user-chart/user-chart.component';
//import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UseIdComponent,
    UserAddComponent,
    UserUpdateComponent,
    TeacherComponent,
    TeacherIdComponent,
    TeacherAddComponent,
    TeacherUpdateComponent,
    CourseComponent,
    CourseIdComponent,
    CourseAddComponent,
    CourseUpdateComponent,
    StudentComponent,
    StudentIdComponent,
    StudentAddComponent,
    StudentUpdateComponent,
    ChartStudentComponent,
    UserChartComponent,
    CallbackComponent
  ],
  providers: [
    AuthService,
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
