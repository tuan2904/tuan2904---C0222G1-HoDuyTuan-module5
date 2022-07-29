import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketOderComponent } from './ticket-oder.component';

describe('TicketOderComponent', () => {
  let component: TicketOderComponent;
  let fixture: ComponentFixture<TicketOderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketOderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketOderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
