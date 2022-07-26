import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContailComponent } from './create-contail.component';

describe('CreateContailComponent', () => {
  let component: CreateContailComponent;
  let fixture: ComponentFixture<CreateContailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateContailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateContailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
