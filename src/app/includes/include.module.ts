import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncludeRoutingModule } from './include-routing.module';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, IncludeRoutingModule],
  exports: [HeaderComponent, FooterComponent]
})
export class IncludeModule {}
