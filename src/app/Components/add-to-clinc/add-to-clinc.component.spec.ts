import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToClincComponent } from './add-to-clinc.component';

describe('AddToClincComponent', () => {
  let component: AddToClincComponent;
  let fixture: ComponentFixture<AddToClincComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToClincComponent]
    });
    fixture = TestBed.createComponent(AddToClincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
