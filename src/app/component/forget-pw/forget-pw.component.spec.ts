import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPwComponent } from './forget-pw.component';

describe('ForgetPwComponent', () => {
  let component: ForgetPwComponent;
  let fixture: ComponentFixture<ForgetPwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
