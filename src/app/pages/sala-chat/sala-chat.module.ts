import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaChatPageRoutingModule } from './sala-chat-routing.module';

import { SalaChatPage } from './sala-chat.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaChatPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SalaChatPage]
})
export class SalaChatPageModule { }
