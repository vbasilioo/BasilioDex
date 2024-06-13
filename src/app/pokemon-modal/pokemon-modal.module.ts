import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonModalPageRoutingModule } from './pokemon-modal-routing.module';

import { PokemonModalPage } from './pokemon-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonModalPageRoutingModule
  ],
  declarations: [PokemonModalPage]
})
export class PokemonModalPageModule {}
