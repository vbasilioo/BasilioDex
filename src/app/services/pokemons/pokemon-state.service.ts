import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PokemonDetails } from 'src/app/interfaces/pokemonDetails.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonStateService {
  subscribe(arg0: (pokemon: any) => void) {
    throw new Error('Method not implemented.');
  }

  private pokemonState = new BehaviorSubject<PokemonDetails[]>([]);
  public currentPokemonState = this.pokemonState.asObservable();

  constructor() { }

  public changePokemonState(pokemon: PokemonDetails[]) {
    this.pokemonState.next(pokemon);
  }
}
