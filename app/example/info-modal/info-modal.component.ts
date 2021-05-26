import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'info-modal',
  templateUrl: 'info-modal.component.html',
  styleUrls: ['info-modal.component.scss']
})
export class InfoModalComponent {
  public title: string = 'Info';
  constructor(
    public dialogRef: MatDialogRef<InfoModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {}
}
