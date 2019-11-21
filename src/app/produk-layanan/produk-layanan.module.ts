import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdukLayananPageRoutingModule } from './produk-layanan-routing.module';

import { ProdukLayananPage } from './produk-layanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdukLayananPageRoutingModule
  ],
  declarations: [ProdukLayananPage]
})
export class ProdukLayananPageModule {}
