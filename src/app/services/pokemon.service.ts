import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

interface PokemonResult {
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
    return this.http.get<PokemonAPIResponse>(`${this.baseUrl}/pokemon?offset=${offset}&limit=25`).pipe(
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
}