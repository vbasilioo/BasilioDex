import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
interface Pokemon {
  pokeIndex: number;
  name: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  offset = 0;
  pokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(){
    this.pokemonService.getPokemon(this.offset).subscribe(res => {
      this.pokemon = res;
    });
  }
}
