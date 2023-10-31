import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarLeftCustomerComponent } from './toolbar-left-customer.component';

describe('ToolbarLeftCustomerComponent', () => {
  let component: ToolbarLeftCustomerComponent;
  let fixture: ComponentFixture<ToolbarLeftCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarLeftCustomerComponent]
    });
    fixture = TestBed.createComponent(ToolbarLeftCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
