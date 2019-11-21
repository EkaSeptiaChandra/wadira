import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrategiBisnisPage } from './strategi-bisnis.page';

const routes: Routes = [
  {
    path: '',
    component: StrategiBisnisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrategiBisnisPageRoutingModule {}
