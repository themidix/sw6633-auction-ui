import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PageResponse } from '../../model/page.response.model';
import { AuctionItem } from '../../model/auctionItem.model';
import { AuctionItemService } from '../../services/auction-item.service';

declare var $: any;
@Component({
  selector: 'app-auction-item',
  templateUrl: './auction-item.component.html',
  styleUrls: ['./auction-item.component.css'],
})
export class AuctionItemComponent implements OnInit {

  @ViewChild('bidModal') bidModal!: ElementRef;
  pageAuctionItem!: PageResponse<AuctionItem>;

  errorMessage!: string;
  auctionItems: AuctionItem[] = [];
  showModal: boolean = false;


  constructor(private auctionService: AuctionItemService,private renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadAuctionItemsByCategory('Antiques', 0, 5);
  }

  private loadAuctionItemsByCategory(
    categoryName: string,
    page: number,
    size: number
  ) {
    this.auctionService
      .getAuctionItemsByCategory(categoryName, page, size)
      .subscribe(
        (pageResponse: PageResponse<AuctionItem>) => {
          this.pageAuctionItem = pageResponse;
          this.auctionItems = pageResponse.content;
        },
        (error) => {
          this.errorMessage = 'Failed to load auction items.';
          console.error(error);
        }
      );
  }
  openBidModal(auctionItem: AuctionItem) {
    // $(this.bidModal.nativeElement).modal('show');
    this.renderer.addClass(this.bidModal.nativeElement, 'show');
    this.renderer.setStyle(this.bidModal.nativeElement, 'display', 'block');
    this.showModal = true;
    this.renderer.addClass(document.body, 'modal-open');
  }
  closeBidModal() {
    this.renderer.removeClass(document.body, 'modal-open');
    this.renderer.removeClass(this.bidModal.nativeElement, 'show');
    this.renderer.setStyle(this.bidModal.nativeElement, 'display', 'none');
    this.showModal = false;
    this.renderer.removeClass(document.body, 'modal-open');
  }

}
