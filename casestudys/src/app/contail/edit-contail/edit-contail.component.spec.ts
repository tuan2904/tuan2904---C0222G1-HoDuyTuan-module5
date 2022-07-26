import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContailComponent } from './edit-contail.component';

describe('EditContailComponent', () => {
  let component: EditContailComponent;
  let fixture: ComponentFixture<EditContailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditContailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
