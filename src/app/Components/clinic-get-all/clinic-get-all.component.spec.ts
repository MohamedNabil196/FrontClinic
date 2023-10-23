import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicGetAllComponent } from './clinic-get-all.component';

describe('ClinicGetAllComponent', () => {
  let component: ClinicGetAllComponent;
  let fixture: ComponentFixture<ClinicGetAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicGetAllComponent]
    });
    fixture = TestBed.createComponent(ClinicGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
