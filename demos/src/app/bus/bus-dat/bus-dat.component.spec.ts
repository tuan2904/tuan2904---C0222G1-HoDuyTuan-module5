import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDatComponent } from './bus-dat.component';

describe('BusDatComponent', () => {
  let component: BusDatComponent;
  let fixture: ComponentFixture<BusDatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusDatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
