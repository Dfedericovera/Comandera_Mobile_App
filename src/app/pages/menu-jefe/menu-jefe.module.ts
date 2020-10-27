import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuJefePageRoutingModule } from './menu-jefe-routing.module';

import { MenuJefePage } from './menu-jefe.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuJefePageRoutingModule
  ],
  declarations: [MenuJefePage]
})
export class MenuJefePageModule { }