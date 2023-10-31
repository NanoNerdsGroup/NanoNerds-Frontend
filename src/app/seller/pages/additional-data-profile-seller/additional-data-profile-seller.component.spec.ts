import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalDataProfileSellerComponent } from './additional-data-profile-seller.component';

describe('AdditionalDataProfileSellerComponent', () => {
  let component: AdditionalDataProfileSellerComponent;
  let fixture: ComponentFixture<AdditionalDataProfileSellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdditionalDataProfileSellerComponent]
    });
    fixture = TestBed.createComponent(AdditionalDataProfileSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
