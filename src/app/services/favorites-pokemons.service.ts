import { Injectable } from '@angular/core';
import { Pokemon } from 'src/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesPokemonsService {
  private favoritesKey = 'favorites';

  addFavorite(pokemon: Pokemon) {
    const favorites = this.getFavorites();
    favorites.push(pokemon);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

  removeFavorite(pokemon: Pokemon){
    let favorites = this.getFavorites();
    favorites = favorites.filter(p => p.pokeIndex !== pokemon.pokeIndex);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

  getFavorites(): Pokemon[] {
    const favorites = localStorage.getItem(this.favoritesKey);
    return favorites ? JSON.parse(favorites) : [];
  }
}
