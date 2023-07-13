import { AuctionItem } from './auctionItem.model';
import { RegisteredUser } from './registeredUser.model';

export interface Bid {
  bidId: number;
  comment: string;
  amount: number;
  placedAt: Date;
  auctionItem: AuctionItem;
  registeredUser: RegisteredUser;
}
