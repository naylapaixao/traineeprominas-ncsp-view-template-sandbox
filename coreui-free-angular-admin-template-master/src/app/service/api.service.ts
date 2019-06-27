import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from '../../model/user';
import {Teacher } from '../../model/teacher';
import { Course } from '../../model/course';
import { Student } from '../../model/student';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUQkJNemhEUmpoRlFqTTBRVGhGT0VZeE5FRTFRemMyTURKRk16QkdSa0ZGTkVRMk5rVTBNUSJ9.eyJpc3MiOiJodHRwczovL2Rldi14c2Zvbi1tNS5hdXRoMC5jb20vIiwic3ViIjoicUJoSVBvR0FzRTdiWnBBU3BrZlhsaGhKcjFpZXdhd1pAY2xpZW50cyIsImF1ZCI6IlRyYWluZWUiLCJpYXQiOjE1NjE2NDE1MzcsImV4cCI6MTU2MTcyNzkzNywiYXpwIjoicUJoSVBvR0FzRTdiWnBBU3BrZlhsaGhKcjFpZXdhd1oiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.qtYM67u71nFpnQAxJWfMyWetypVYYDbW3bSrHV2FyD1NLdsPN8BRpy4xrzLFKZBehArHAHkpI7VzEpaYq6Cl8prj1GETmUvGmrCczlNgezskzY5_iyOvcRi-wTcl74K0TFabVy1hFRY30jG5QHacomS0Ng0iR1UAZyv2jq9ALKImsN1Q5NekuLMqjoMv4nWDZMmGOXhLzDV-UW5PeBzCN7GShDWng0r5H4VbJvbtsLeNEUEhXi_uHCnil0b7SijZwmnQbcNxsnSH7Qbmsu3qvCXM8aRCQu6Si2S6mN8HIQWe58zJNHEHomXQVkds-trO7V9czo96hX1erAzhjTGlNw'})
};

import { apiUrl } from '../app.api';
import { apiUrlSecure } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}JSON/user` || `${apiUrlSecure}JSON/user`, httpOptions)
      .pipe(
        tap(users => console.log('leu os usuários')),
        catchError(this.handleError('getUsers', []))
      );
  }

  getUser(id: number): Observable<User> {
    const url = (`${apiUrl}JSON/user/${id}` || `${apiUrlSecure}JSON/user/${id}`);
    return this.http.get<User>(url, httpOptions).pipe(
      tap(_ => console.log(`leu o usuário id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  postUser(user): Observable<User> {
    return this.http.post<User>(`${apiUrl}user` || `${apiUrlSecure}user`, user, httpOptions).pipe(
      tap((user1: User) => console.log(`adicionou o usuário com w/ id=${user1.id}`)),
      catchError(this.handleError<User>('postUser'))
    );
  }

  putUser(id, user): Observable<any> {
    const url = `${apiUrl}user/${id}`;
    return this.http.put(url, user, httpOptions).pipe(
      tap(_ => console.log(`atualiza o usuário com id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser(id): Observable<User> {
    const url = `${apiUrl}user/${id}`;
    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuário com id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${apiUrl}JSON/teacher`, httpOptions)
      .pipe(
        tap(teachers => console.log('leu os usuários')),
        catchError(this.handleError('getTeachers', []))
      );
  }

  getTeacher(id: number): Observable<Teacher> {
    const url = `${apiUrl}JSON/teacher/${id}`;
    return this.http.get<Teacher>(url).pipe(
      tap(_ => console.log(`leu o usuário id=${id}`)),
      catchError(this.handleError<Teacher>(`getTeacher id=${id}`))
    );
  }

  deleteTeacher(id): Observable<Teacher> {
    const url = `${apiUrl}Teacher/${id}`;
    return this.http.delete<Teacher>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuário com id=${id}`)),
      catchError(this.handleError<Teacher>('deleteTeacher'))
    );
  }

  postTeacher(teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${apiUrl}teacher`, teacher, httpOptions).pipe(
      tap((teacher1: Teacher) => console.log(`adicionou o usuário com w/ id=${teacher1.id}`)),
      catchError(this.handleError<Teacher>('postTeacher'))
    );
  }

  putTeacher(id, teacher): Observable<any> {
    const url = `${apiUrl}teacher/${id}`;
    return this.http.put(url, teacher, httpOptions).pipe(
      tap(_ => console.log(`atualiza o usuário com id=${id}`)),
      catchError(this.handleError<any>('updateTeacher'))
    );
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${apiUrl}course`, httpOptions)
      .pipe(
        tap(courses => console.log('leu os cursos')),
        catchError(this.handleError('getCourses', []))
      );
  }

  getCourse(id: number): Observable<Course> {
    const url = `${apiUrl}JSON/course/${id}`;
    return this.http.get<Course>(url, httpOptions).pipe(
      tap(_ => console.log(`leu o usuário id=${id}`)),
      catchError(this.handleError<Course>(`getCourse id=${id}`))
    );
  }

  postCourse(course): Observable<Course> {
    return this.http.post<Course>(`${apiUrl}course`, course, httpOptions).pipe(
      tap((course1: Course) => console.log(`adicionou o curso com w/ id=${course1.id}`)),
      catchError(this.handleError<Course>('postCourse'))
    );
  }

  putCourse(id, course): Observable<any> {
    const url = `${apiUrl}course/${id}`;
    return this.http.put(url, course, httpOptions).pipe(
      tap(_ => console.log(`atualiza o usuário com id=${id}`)),
      catchError(this.handleError<any>('updateCourse'))
    );
  }

  deleteCourse(id): Observable<Course> {
    const url = `${apiUrl}Course/${id}`;
    return this.http.delete<Course>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuário com id=${id}`)),
      catchError(this.handleError<Course>('deleteCourse'))
    );
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${apiUrl}student`,httpOptions)
      .pipe(
        tap(students => console.log('leu os cursos')),
        catchError(this.handleError('getStudents', []))
      );
  }

  getStudent(id: number): Observable<Student> {
    const url = `${apiUrl}JSON/student/${id}`;
    return this.http.get<Student>(url, httpOptions).pipe(
      tap(_ => console.log(`leu o usuário id=${id}`)),
      catchError(this.handleError<Student>(`getStudent id=${id}`))
    );
  }

  postStudent(student): Observable<Student> {
    return this.http.post<Student>(`${apiUrl}student`, student, httpOptions).pipe(
      tap((student1: Student) => console.log(`adicionou o curso com w/ id=${student1.id}`)),
      catchError(this.handleError<Student>('postStudent'))
    );
  }

  putStudent(id, student): Observable<any> {
    const url = `${apiUrl}student/${id}`;
    return this.http.put(url, student, httpOptions).pipe(
      tap(_ => console.log(`atualiza o usuário com id=${id}`)),
      catchError(this.handleError<any>('updateStudent'))
    );
  }


  deleteStudent(id): Observable<Student> {
    const url = `${apiUrl}Student/${id}`;
    return this.http.delete<Student>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuário com id=${id}`)),
      catchError(this.handleError<Student>('deleteStudent'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }





}
