import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoreValuesPageRoutingModule } from './core-values-routing.module';

import { CoreValuesPage } from './core-values.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreValuesPageRoutingModule
  ],
  declarations: [CoreValuesPage]
})
export class CoreValuesPageModule {}
