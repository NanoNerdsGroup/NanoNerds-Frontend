import { TestBed } from '@angular/core/testing';

import { AddEditPostService } from './add-edit-post.service';

describe('AddEditPostService', () => {
  let service: AddEditPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEditPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
