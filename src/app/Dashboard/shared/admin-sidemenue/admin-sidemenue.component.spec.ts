import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidemenueComponent } from './admin-sidemenue.component';

describe('AdminSidemenueComponent', () => {
  let component: AdminSidemenueComponent;
  let fixture: ComponentFixture<AdminSidemenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSidemenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSidemenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
