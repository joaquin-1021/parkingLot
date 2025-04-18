import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardParkingComponent } from './card-parking.component';

describe('CardParkingComponent', () => {
  let component: CardParkingComponent;
  let fixture: ComponentFixture<CardParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardParkingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
