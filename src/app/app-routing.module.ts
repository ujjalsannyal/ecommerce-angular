import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';


const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'cart', component: CartDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

