import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeptComponent } from './create-dept.component';

describe('CreateDeptComponent', () => {
  let component: CreateDeptComponent;
  let fixture: ComponentFixture<CreateDeptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDeptComponent]
    });
    fixture = TestBed.createComponent(CreateDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
