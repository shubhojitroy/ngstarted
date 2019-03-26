import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { StarComponent } from './star.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StarComponent, ConvertToSpacesPipe],
  imports: [CommonModule, SharedRoutingModule],
  exports: [StarComponent, CommonModule, ConvertToSpacesPipe, FormsModule]
})
export class SharedModule {}
