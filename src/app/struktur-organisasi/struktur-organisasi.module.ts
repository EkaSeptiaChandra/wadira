import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrukturOrganisasiPageRoutingModule } from './struktur-organisasi-routing.module';

import { StrukturOrganisasiPage } from './struktur-organisasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrukturOrganisasiPageRoutingModule
  ],
  declarations: [StrukturOrganisasiPage]
})
export class StrukturOrganisasiPageModule {}
