import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContailComponent } from './contail.component';

describe('ContailComponent', () => {
  let component: ContailComponent;
  let fixture: ComponentFixture<ContailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
