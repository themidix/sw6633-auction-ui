import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() inputStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-house',
      link: '/auction-items'
    },
    {
      number: '2',
      name: 'My Profile',
      icon: 'fa-solid fa-id-card',
      link: '#'
    },
    {
      number: '3',
      name: 'My Auctions',
      icon: 'fa-solid fa-box',
      link: '#'
    },
    {
      number: '4',
      name: 'My Bids',
      icon: 'fa-solid fa-gavel',
      link: '#'
    },
    {
      number: '5',
      name: 'My orders',
      icon: 'fa-solid fa-cart-shopping',
      link: '#'
    },
    {
      number: '6',
      name: 'Users',
      icon: 'fa-solid fa-users',
      link: '#'
    },
    {
      number: '7',
      name: 'My Reports',
      icon: 'fa-regular fa-folder-open',
      link: '#'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
