import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { printMessage } from '../../utilFunc/PrintConscoleMessage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}
  public isOnHome = true;
  public showHeadingAccoringToURL = '';
  ngOnInit() {
    /*this.router.events.subscribe((event:any) => {
      console.log("[ye ..?]",event);
    });*/
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        printMessage('Kia a rha he router ke URL ME ', event.url);

        if (this.router.url === '/') {
          this.isOnHome = true;

        } else if (this.router.url === '/allListings') {
          this.isOnHome = false;
          this.showHeadingAccoringToURL = 'FEATURED LISTINGS';
        }
        else if (this.router.url === '/aboutUs') {
          this.isOnHome = false;
          this.showHeadingAccoringToURL = 'ABOUT US';
        }
        else if (this.router.url === '/contactUs') {
          this.isOnHome = false;
          this.showHeadingAccoringToURL = 'CONTACT US';
        }
        else if (this.router.url.includes('/singleListing')) {
          this.isOnHome = false;
          this.showHeadingAccoringToURL = 'SINGLE LISTING';
        }
      });
  }
}
