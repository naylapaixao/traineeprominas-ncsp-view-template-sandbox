import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherIdComponent } from './teacher-id.component';

describe('TeacherIdComponent', () => {
  let component: TeacherIdComponent;
  let fixture: ComponentFixture<TeacherIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
