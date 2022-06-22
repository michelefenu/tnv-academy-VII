import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPiattoComponent } from './edit-piatto.component';

describe('AddPiattoComponent', () => {
  let component: EditPiattoComponent;
  let fixture: ComponentFixture<EditPiattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPiattoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPiattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
