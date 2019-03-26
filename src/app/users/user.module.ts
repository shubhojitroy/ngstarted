import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncludeModule } from '../includes/include.module';
import { SharedModule } from '../shared/shared.module';

import { UserRoutingModule } from './user-routing.module';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, IncludeModule, SharedModule, UserRoutingModule]
})
export class UserModule {}
