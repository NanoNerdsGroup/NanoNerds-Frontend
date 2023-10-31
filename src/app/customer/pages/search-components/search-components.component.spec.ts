import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponentsComponent } from './search-components.component';

describe('SearchComponentsComponent', () => {
  let component: SearchComponentsComponent;
  let fixture: ComponentFixture<SearchComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponentsComponent]
    });
    fixture = TestBed.createComponent(SearchComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
