import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from "./customer/customer.component";
import { SpectacleComponent } from './spectacle/spectacle.component';


const routes: Routes = [
  { path: 'spectacle', component: SpectacleComponent },
  { path: 'customer', component: CustomerComponent },
  { path: '', redirectTo: '/spectacle', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
