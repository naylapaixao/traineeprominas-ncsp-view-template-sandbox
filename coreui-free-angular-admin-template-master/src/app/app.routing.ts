import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {UserComponent} from "./user/user/user.component";
import {UseIdComponent} from "./user/use-id/use-id.component";
import { UserAddComponent } from "./user/user-add/user-add.component";
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserChartComponent } from './user/user-chart/user-chart.component';
import { TeacherComponent } from './teacher/teacher/teacher.component';
import { TeacherIdComponent} from './teacher/teacher-id/teacher-id.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import { TeacherUpdateComponent} from './teacher/teacher-update/teacher-update.component';
import { CourseComponent } from './course/course/course.component';
import { CourseIdComponent} from './course/course-id/course-id.component';
import { CourseAddComponent} from './course/course-add/course-add.component';
import { CourseUpdateComponent} from './course/course-update/course-update.component';
import { StudentComponent } from './student/student/student.component';
import  { StudentIdComponent } from './student/student-id/student-id.component';
import  { StudentAddComponent } from './student/student-add/student-add.component';
import  { StudentUpdateComponent } from './student/student-update/student-update.component';
import  { ChartStudentComponent } from './student/chart-student/chart-student.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path:'user',
        component: UserComponent,
        data:{title: 'Lista de Usuários'}
      },
      {
        path: 'user/:id',
        component: UseIdComponent,
        data:{title: 'Usuário'}
      },
      {
        path:'create/user',
        component: UserAddComponent,
        data:{title: 'Novo Usuário'}
      },
      {
        path:'update/user/:id',
        component: UserUpdateComponent,
        data:{title: 'Editar Usuário'}
      },
      {
        path:'chart/user',
        component: UserChartComponent,
        data:{title: 'Gráfico Admin X Guess'}
      },
      {
        path: 'teacher',
        component: TeacherComponent,
        data: { title: 'Lista de professores' }
      },
      {
        path: 'teacher/:id',
        component: TeacherIdComponent,
        data:{title: 'Professor'} 
      },
      {
        path:'create/teacher',
        component: TeacherAddComponent,
        data:{title: 'Novo Usuário'}
      },
      {
        path:'update/teacher/:id',
        component: TeacherUpdateComponent,
        data:{title: 'Editar Professor'}
      },
      {
        path:'course',
        component: CourseComponent,
        data:{title: 'Lista de Cursos'}
      },
      {
        path:'course/:id',
        component: CourseIdComponent,
        data:{title: 'Curso'}
      },
      {
        path:'create/course',
        component: CourseAddComponent,
        data:{title: 'Novo Curso'}
      },
      {
        path:'update/course/:id',
        component: CourseUpdateComponent,
        data:{title: 'Editar Curso'}
      },
      {
        path: 'student',
        component: StudentComponent,
        data: { title: 'Lista de estudantes' }
      },
      {
        path: 'student/:id',
        component: StudentIdComponent,
        data:{title: 'Aluno'} 
      },
      {
        path: 'create/student',
        component: StudentAddComponent,
        data:{title: 'Novo Aluno'} 
      },
      {
        path:'update/student/:id',
        component: StudentUpdateComponent,
        data:{title: 'Editar Aluno'}
      },
      {
        path:'chart/student',
        component: ChartStudentComponent,
        data:{title: 'Gráfico Aluno por Curso'}
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
