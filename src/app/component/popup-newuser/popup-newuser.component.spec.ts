import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewuserComponent } from './popup-newuser.component';

describe('PopupNewuserComponent', () => {
  let component: PopupNewuserComponent;
  let fixture: ComponentFixture<PopupNewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupNewuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
