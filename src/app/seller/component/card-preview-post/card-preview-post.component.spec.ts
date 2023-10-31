import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPreviewPostComponent } from './card-preview-post.component';

describe('CardPreviewPostComponent', () => {
  let component: CardPreviewPostComponent;
  let fixture: ComponentFixture<CardPreviewPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPreviewPostComponent]
    });
    fixture = TestBed.createComponent(CardPreviewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
