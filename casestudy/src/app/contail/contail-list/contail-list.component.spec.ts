import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContailListComponent } from './contail-list.component';

describe('ContailListComponent', () => {
  let component: ContailListComponent;
  let fixture: ComponentFixture<ContailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContailListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
