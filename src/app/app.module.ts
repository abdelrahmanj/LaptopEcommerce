import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemBoxComponent } from './item-box/item-box.component';
import { HttpClientModule } from '@angular/common/http'
import { ShoppingCardService } from './shared/shopping-card.service';
import { BasicElementService } from './shared/basic-element.service';
import { ApiConfigService } from './shared/api-config.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ItemsPageComponent,
    ItemDetailsComponent,
    ItemBoxComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [BasicElementService, ShoppingCardService, ApiConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
