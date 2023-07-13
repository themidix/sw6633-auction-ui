import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PageResponse } from './model/page.response.model';
import { AuctionItem } from './model/auctionItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sw6633-auction-ui';
  imageUrl = 'https://randomuser.me/api/portraits/men/75.jpg';
  pageStudents!: Observable<PageResponse<AuctionItem>>;
  inputStatus: boolean = false;
}
