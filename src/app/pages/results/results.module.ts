import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { ComponentsModule } from 'src/app/components/components.module';
import { ResultsPage } from './results';
import { ResultsPageRoutingModule } from './results-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ResultsPageRoutingModule
  ],
  declarations: [ResultsPage]
})
export class ResultsPageModule {}
