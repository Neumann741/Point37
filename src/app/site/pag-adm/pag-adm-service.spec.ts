import { TestBed } from '@angular/core/testing';
import { PagAdmService } from './pag-adm-service';

describe('PagAdmService', () => {
  let service: PagAdmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagAdmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
