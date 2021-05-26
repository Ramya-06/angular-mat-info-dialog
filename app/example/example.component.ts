import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ExampleDialogComponent } from './example-dialog';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent {
  categoryID: number;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '900px',
      height: '600px',
      data: { infoCategoryID: this.categoryID }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
