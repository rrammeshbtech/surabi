import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PublicHeaderComponent } from './public-header/public-header.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MaterialModule } from '../material.module';
import { ToastService } from './toast.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CommonDialogService } from './common-dialog.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    PublicHeaderComponent,
    PublicFooterComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmDialogComponent
  ],
  exports: [
    PublicHeaderComponent,
    PublicFooterComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmDialogComponent
  ],
  providers: [
    ToastService,
    CommonDialogService
  ],
  entryComponents:[
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
