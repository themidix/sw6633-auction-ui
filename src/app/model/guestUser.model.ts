import { User } from './user.model';

export interface GuestUser {
  guestUserId: number;
  firstName: string;
  lastName: string;
  shippingAddress: string;
  creditCardNumber: string;
  user: User;
}
