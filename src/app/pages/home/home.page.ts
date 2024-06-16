import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController, ModalController } from '@ionic/angular';

import { PokemonService } from '../../services/pokemons/pokemon.service';
import { FavoritesPokemonsService } from 'src/app/services/pokemons/favorites-pokemons.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonDetails } from 'src/app/interfaces/pokemonDetails.interface';

import { PokemonModalPage } from '../pokemon-modal/pokemon-modal.page';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

import { colorsPokemons, PokemonType } from 'src/app/utils/colors';
import { formatPokemonName } from 'src/app/utils/formatPokemonName';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public readonly MAX_PAGE = 10;
  public readonly MAX_COLOR = 125;
  public CURRENT_PAGE = 1;

  private offset = 0;
  public themeIcon = 'moon';
  private isDarkTheme = false;
  private error: Error | undefined;

  public pokemon: Pokemon[] = [];
  public pokemonDetails: PokemonDetails[] = [];
  public backgroundColors: { [key: string]: string } = {};

  constructor(
    private themeService: ThemeService,
    private pokemonService: PokemonService,
    private modalController: ModalController,
    private favoritesPokemons: FavoritesPokemonsService,
    private popoverController: PopoverController
  ) {}

  ngOnInit(): void {
    this.loadPokemon();
    this.loadAllPokemonDetails();
    this.loadAllPokemonColors();
  }

  private loadAllPokemonDetails(): void {
    for (let i = 1; i <= this.MAX_PAGE; i++) {
      this.pokemonService.getPokemonDetails(i).subscribe(res => {
        this.pokemonDetails[i] = res;
      });
    }
  }

  private loadAllPokemonColors(): void {
    for(let i = 1; i <= this.MAX_COLOR; i++){
      this.pokemonService.getPokemonDetails(i).subscribe(res => {
        this.backgroundColors[res.pokeIndex] = this.getColorByPokemonType(res);
      });
    }
  }

  private getColorByPokemonType(pokemon: PokemonDetails): string {
    if (!pokemon.types || pokemon.types.length === 0) 
      return '#FFFFFF';
  
    const type = pokemon.types[0].type.name as PokemonType;
    return colorsPokemons[type] || '#FFFFFF';
  }

  private loadPokemon(): void {
    this.pokemonService.getPokemon(this.offset).subscribe(res => {
      this.pokemon = [
        ...this.pokemon,
        ...res.map(poke => {
          return {
            ...poke,
            pokeIndex: poke.pokeIndex.toString(),
          };
        }),
      ];
    });
  }

  public onSearchChange(event: CustomEvent): void {
    let value = event.detail.value;
  
    if(value == ''){
      this.offset = 0;
      this.pokemon = [];
      this.loadPokemon();
      return;
    }
  
    this.pokemonService.findPokemon(value).subscribe(res => {
      this.pokemon = [res].map(poke => ({
        ...poke,
        pokeIndex: poke.pokeIndex.toString()
      }));
    }, err => {
      this.pokemon = [];
    });
  }

  public async openPokemonModal(pokemon: Pokemon): Promise<void> {
    const modal = await this.modalController.create({
      component: PokemonModalPage,
      componentProps: {
        pokemon: pokemon
      }
    });

    return await modal.present();
  }

  public onPageChange(page: number): void {
    this.CURRENT_PAGE = page;
    const offset = (page - 1) * 9;
    this.pokemonService.getPokemon(Number(offset)).subscribe(pokemons => {
      this.pokemon = pokemons.map(poke => ({
        ...poke,
        pokeIndex: poke.pokeIndex.toString()
      }));
    });
  }

  public toggleFavorite(pokemon: Pokemon): void {
    if (this.isFavorite(pokemon)) {
      this.favoritesPokemons.removeFavorite(pokemon);
    } else {
      this.favoritesPokemons.addFavorite(pokemon);
    }
  }

  public isFavorite(pokemon: Pokemon): boolean {
    const favorites = this.favoritesPokemons.getFavorites();
    return favorites.some(fav => fav.pokeIndex === pokemon.pokeIndex);
  }

  public async presentPopover(event: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: event,
      translucent: true
    });

    return await popover.present();
  }

  public toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setDarkTheme(this.isDarkTheme);
    this.themeIcon = this.isDarkTheme ? 'sunny' : 'moon';
  }
}