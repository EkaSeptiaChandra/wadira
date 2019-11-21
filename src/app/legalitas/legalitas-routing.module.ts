import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalitasPage } from './legalitas.page';

const routes: Routes = [
  {
    path: '',
    component: LegalitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalitasPageRoutingModule {}
