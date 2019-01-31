import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { SpectacleComponent } from './spectacle/spectacle.component';
import { CustomerComponent } from './customer/customer.component';
import { BsUtilModule } from "src/bs-util/bs-util.module";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyFooterComponent,
    SpectacleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgbModule,
    CustomerComponent, FormsModule, BsUtilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
