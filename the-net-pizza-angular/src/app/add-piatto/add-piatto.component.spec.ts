import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPiattoComponent } from './add-piatto.component';

describe('AddPiattoComponent', () => {
  let component: AddPiattoComponent;
  let fixture: ComponentFixture<AddPiattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPiattoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPiattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
