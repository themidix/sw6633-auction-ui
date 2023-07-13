import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuctionItem } from '../model/auctionItem.model';
import { Observable } from 'rxjs';
import * as http from 'http';
import { environment } from '../../environments/environment';
import { PageResponse } from '../model/page.response.model';

@Injectable({
  providedIn: 'root',
})
export class AuctionItemService {
  constructor(private http: HttpClient) {}

  public createAuctionItem(auctionItem: AuctionItem): Observable<AuctionItem> {
    return this.http.post<AuctionItem>(
      environment.backendHost + '/auctionItems/',
      auctionItem
    );
  }

  public getAuctionItemsByCategory(
    categoryName: string,
    currentPage: number,
    pageSize: number
  ): Observable<PageResponse<AuctionItem>> {
    const url = `${environment.backendHost}/auction-api/findAuctionItemByCategory?categoryName=${categoryName}&page=${currentPage}&size=${pageSize}`;
    return this.http.get<PageResponse<AuctionItem>>(url);
  }
}
