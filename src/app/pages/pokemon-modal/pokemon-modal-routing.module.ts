import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonModalPage } from './pokemon-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonModalPageRoutingModule {}
