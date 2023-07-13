import { Category } from './category.model';
import { Bid } from './bid.model';
import { RegisteredUser } from './registeredUser.model';

export interface AuctionItem {
  auctionItemId: number;
  auctionItmImgUrl: string;
  description: string;
  startingPrice: number;
  auctionItemStatus: boolean;
  startingTime: Date;
  closingTime: Date;
  category: Category;
  currentHighestBid: Bid;
  registeredUser: RegisteredUser;
}
