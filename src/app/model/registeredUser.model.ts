import { User } from './user.model';

export interface RegisteredUser {
  registeredUserId: number;
  firstName: string;
  lastName: string;
  shippingAddress: string;
  creditCardNumber: string;
  user: User;
}
