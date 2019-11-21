import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KontakKamiPageRoutingModule } from './kontak-kami-routing.module';

import { KontakKamiPage } from './kontak-kami.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KontakKamiPageRoutingModule
  ],
  declarations: [KontakKamiPage]
})
export class KontakKamiPageModule {}
