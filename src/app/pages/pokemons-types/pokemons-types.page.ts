import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/interfaces/pokemonDetails.interface';
import { PokemonStateService } from 'src/app/services/pokemons/pokemon-state.service';
import { PokemonService } from 'src/app/services/pokemons/pokemon.service';

@Component({
  selector: 'app-pokemons-types',
  templateUrl: './pokemons-types.page.html',
  styleUrls: ['./pokemons-types.page.scss'],
})
export class PokemonsTypesPage{
  public pokemon: PokemonDetails[] = [];

  constructor(private pokemonStateService: PokemonStateService) { 
    this.pokemonStateService.currentPokemonState.subscribe((pokemon: any) => {
      this.pokemon = pokemon;
      console.log(pokemon);
    });
  }
}
