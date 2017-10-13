import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MatDialog, MatDialogRef } from '@angular/material';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Injectable()
export class CommonDialogService {
  confirmDialogRef: MatDialogRef<ConfirmDialogComponent> | null;
  confirmDialogConfig = {
    disableClose: true,
    panelClass: '',
    hasBackdrop: true,
    backdropClass: '',
    width: '400px',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    },
    data: null
  };
  
  constructor(public dialog: MatDialog
    , @Inject(DOCUMENT) doc: any) {
    dialog.afterOpen.subscribe(() => {
      if (!doc.body.classList.contains('no-scroll')) {
        doc.body.classList.add('no-scroll');
      }
    });
    dialog.afterAllClosed.subscribe(() => {
      doc.body.classList.remove('no-scroll');
    });
  }

  confirm(title:string, message:string){
    const confirmDetails = {
      title: title,
      message: message
    },
    config = Object.assign({}, this.confirmDialogConfig);

    config.data = confirmDetails;
    return this.dialog.open(ConfirmDialogComponent, config);
  }

}