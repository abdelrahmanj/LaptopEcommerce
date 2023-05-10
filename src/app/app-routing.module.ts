import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: 'Items', component: ItemsPageComponent},
  {path: 'Home', component: HomePageComponent},
  {path: 'Cart', component: ShoppingCartComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Item-Details/:id', component: ItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
