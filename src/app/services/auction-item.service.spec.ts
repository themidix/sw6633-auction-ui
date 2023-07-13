import { TestBed } from '@angular/core/testing';

import { AuctionItemService } from './auction-item.service';

describe('AuctionItemService', () => {
  let service: AuctionItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuctionItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
