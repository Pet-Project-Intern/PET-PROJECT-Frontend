import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEdituserComponent } from './popup-edituser.component';

describe('PopupEdituserComponent', () => {
  let component: PopupEdituserComponent;
  let fixture: ComponentFixture<PopupEdituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEdituserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEdituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
