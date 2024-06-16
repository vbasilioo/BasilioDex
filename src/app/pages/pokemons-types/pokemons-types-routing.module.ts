import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsTypesPage } from './pokemons-types.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonsTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsTypesPageRoutingModule {}
