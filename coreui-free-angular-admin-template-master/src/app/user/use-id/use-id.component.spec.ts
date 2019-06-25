import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseIdComponent } from './use-id.component';

describe('UseIdComponent', () => {
  let component: UseIdComponent;
  let fixture: ComponentFixture<UseIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
