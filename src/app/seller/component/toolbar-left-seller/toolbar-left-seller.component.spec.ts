import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarLeftSellerComponent } from './toolbar-left-seller.component';

describe('ToolbarLeftSellerComponent', () => {
  let component: ToolbarLeftSellerComponent;
  let fixture: ComponentFixture<ToolbarLeftSellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarLeftSellerComponent]
    });
    fixture = TestBed.createComponent(ToolbarLeftSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
