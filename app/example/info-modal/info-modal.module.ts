import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCommonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { InfoModalComponent } from './info-modal.component';

@NgModule({
  declarations: [InfoModalComponent],
  entryComponents: [InfoModalComponent],
  imports: [
    FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [InfoModalComponent]
})
export class InfoModalModule {}
