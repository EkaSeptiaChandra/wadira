import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegalitasPageRoutingModule } from './legalitas-routing.module';

import { LegalitasPage } from './legalitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegalitasPageRoutingModule
  ],
  declarations: [LegalitasPage]
})
export class LegalitasPageModule {}
