import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

interface PokemonResult {
  id: number;
  name: string;
  url: string;
  image: string;
  pokeIndex: number;
}

interface PokemonAPIResponse {
  results: PokemonResult[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2';
  imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

  constructor(private http: HttpClient) { }

  getPokemon(offset = 0) {
    return this.http.get<PokemonAPIResponse>(`${this.baseUrl}/pokemon?offset=${offset}&limit=12`).pipe(
      map(response => {
        return response.results;
      }),
      map(pokemons => {
        return pokemons.map((pokemon, index) => {
          pokemon.image = this.getPokemonImage(index + offset + 1);
          pokemon.pokeIndex = index + offset + 1;
          return pokemon;
        })
      })
    )
  }

  getPokemonImage(index: number){
    return `${this.imageUrl}${index}.png`;
  }

  findPokemon(search: string){
    return this.http.get(`${this.baseUrl}/pokemon/${search}`).pipe(
      map(pokemon => {
        const typedPokemon = pokemon as PokemonResult;
        typedPokemon.image = this.getPokemonImage(typedPokemon.id);
        typedPokemon.pokeIndex = typedPokemon.id;
        return typedPokemon;
      })
    );
  }

  getPokemonDetails(index: number){
    return this.http.get(`${this.baseUrl}/pokemon/${index}`).pipe(
      map(pokemon => {
        const typedPokemon = pokemon as PokemonResult;
        typedPokemon.image = this.getPokemonImage(typedPokemon.id);
        typedPokemon.pokeIndex = typedPokemon.id;
        return typedPokemon;
      })
    );
  }
}