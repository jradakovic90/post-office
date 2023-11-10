import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentComponent } from './shipment.component';

describe('ShipmentComponent', () => {
  let component: ShipmentComponent;
  let fixture: ComponentFixture<ShipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentComponent]
    });
    fixture = TestBed.createComponent(ShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
