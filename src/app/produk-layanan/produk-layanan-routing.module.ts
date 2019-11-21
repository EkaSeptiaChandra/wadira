import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdukLayananPage } from './produk-layanan.page';

const routes: Routes = [
  {
    path: '',
    component: ProdukLayananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdukLayananPageRoutingModule {}
