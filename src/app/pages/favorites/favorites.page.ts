import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/interfaces/pokemon.interface';
import { FavoritesPokemonsService } from '../../services/favorites-pokemons.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favorites: Pokemon[] = [];

  constructor(private favoritesService: FavoritesPokemonsService) { }

  ngOnInit() {
    this.favorites = this.favoritesService.getFavorites();
  }

}
