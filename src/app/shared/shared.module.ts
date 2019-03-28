import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
  declarations: [
    UppercasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UppercasePipe
  ]
})
export class SharedModule { }
