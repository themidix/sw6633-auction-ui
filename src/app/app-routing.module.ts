import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionItemComponent } from './components/auction-item/auction-item.component';
import { HeaderComponent } from './components/header/header.component';
import {AuthenticationComponent} from "./components/authentication/authentication.component";

const routes: Routes = [
  { path: 'auction-items', component: AuctionItemComponent },
  { path: 'header', component: HeaderComponent },
  {path: 'auth', component: AuthenticationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
