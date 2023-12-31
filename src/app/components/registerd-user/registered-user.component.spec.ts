import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredUserComponent } from './registered-user.component';

describe('RegisterdUserComponent', () => {
  let component: RegisteredUserComponent;
  let fixture: ComponentFixture<RegisteredUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisteredUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisteredUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
