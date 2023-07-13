import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisteredUserComponent } from './components/registerd-user/registered-user.component';
import { AuctionItemComponent } from './components/auction-item/auction-item.component';
import { HeaderComponent } from './components/header/header.component';
import { GuestUserComponent } from './components/guest-user/guest-user.component';
import { BidsComponent } from './components/bids/bids.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RegisteredUserComponent,
    AuctionItemComponent,
    HeaderComponent,
    GuestUserComponent,
    BidsComponent,
    SideNavComponent,
    AuthenticationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// Developed by Dickson Diku
