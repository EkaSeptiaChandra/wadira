import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KontakKamiPage } from './kontak-kami.page';

const routes: Routes = [
  {
    path: '',
    component: KontakKamiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KontakKamiPageRoutingModule {}
