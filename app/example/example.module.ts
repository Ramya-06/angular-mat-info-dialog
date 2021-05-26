import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCommonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { ExampleDialogModule } from './example-dialog';

import { ExampleComponent } from './example.component';
import { InfoModalModule } from './info-modal/info-modal.module';

@NgModule({
  declarations: [ExampleComponent],
  exports: [ExampleComponent],
  imports: [
    InfoModalModule,
    ExampleDialogModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ExampleModule {}
