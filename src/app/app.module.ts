import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './products/product.module';
import { UserModule } from './users/user.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { IncludeModule } from './includes/include.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    UserModule,
    HomeModule,
    IncludeModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
