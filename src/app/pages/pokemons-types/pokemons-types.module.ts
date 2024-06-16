import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonsTypesPageRoutingModule } from './pokemons-types-routing.module';

import { PokemonsTypesPage } from './pokemons-types.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonsTypesPageRoutingModule
  ],
  declarations: [PokemonsTypesPage]
})
export class PokemonsTypesPageModule {}
