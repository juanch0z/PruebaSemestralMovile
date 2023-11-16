import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrPageRoutingModule } from './qr-routing.module';
import { QrPage } from './qr.page';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

// https://www.npmjs.com/packe/angularx-qrcode/v/16.0.2
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrPageRoutingModule,
    ZXingScannerModule,
    QRCodeModule
  ],
  declarations: [QrPage]
})
export class QrPageModule {}
