import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInformationComponent } from './component-information.component';

describe('ComponentInformationComponent', () => {
  let component: ComponentInformationComponent;
  let fixture: ComponentFixture<ComponentInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentInformationComponent]
    });
    fixture = TestBed.createComponent(ComponentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
