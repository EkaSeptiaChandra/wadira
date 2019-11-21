import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrukturOrganisasiPage } from './struktur-organisasi.page';

const routes: Routes = [
  {
    path: '',
    component: StrukturOrganisasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrukturOrganisasiPageRoutingModule {}
