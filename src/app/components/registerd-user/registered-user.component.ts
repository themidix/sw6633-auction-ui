import { Component, OnInit } from '@angular/core';
import { PageResponse } from '../../model/page.response.model';
import { RegisteredUser } from '../../model/registeredUser.model';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { AuctionItem } from '../../model/auctionItem.model';

@Component({
  selector: 'app-registerd-user',
  templateUrl: './registered-user.component.html',
  styleUrls: ['./registered-user.component.css'],
})
export class RegisteredUserComponent implements OnInit {
  registeredUserFormGroup!: FormGroup;
  pageRegisteredUser!: Observable<PageResponse<RegisteredUser>>;
  pageAuctionItem$!: Observable<PageResponse<AuctionItem>>;
  modalRegisteredUser!: RegisteredUser;

  errorMessage!: string;

  currentPage: number = 0;
  pageSize: number = 5;
  auctionItemCurrentPage: number = 0;
  auctionItemPageSize: number = 5;
  submitted: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
