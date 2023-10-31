import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFormPostComponent } from './add-edit-form-post.component';

describe('AddEditFormPostComponent', () => {
  let component: AddEditFormPostComponent;
  let fixture: ComponentFixture<AddEditFormPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditFormPostComponent]
    });
    fixture = TestBed.createComponent(AddEditFormPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
