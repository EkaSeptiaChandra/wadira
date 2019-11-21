import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreValuesPage } from './core-values.page';

const routes: Routes = [
  {
    path: '',
    component: CoreValuesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreValuesPageRoutingModule {}
