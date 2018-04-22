import { TestBed, inject } from '@angular/core/testing';

import { NailPolishService } from '../nail-polish.service';

describe('NailPolishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NailPolishService]
    });
  });

  it('should be created', inject([NailPolishService], (service: NailPolishService) => {
    expect(service).toBeTruthy();
  }));
});
