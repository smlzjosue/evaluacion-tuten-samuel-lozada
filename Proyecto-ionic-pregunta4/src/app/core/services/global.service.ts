import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  token: string;
  constructor( public dialog: MatDialog) { }

  notification(title = 'Aviso', message): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '250px',
      data: {title, message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
