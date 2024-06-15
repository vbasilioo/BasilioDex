import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { NavController, PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PokemonModalPage } from '../pokemon-modal/pokemon-modal.page';
import { Pokemon } from 'src/interfaces/pokemon.interface';
import { FavoritesPokemonsService } from '../../services/favorites-pokemons.service';
import { colorsPokemons, PokemonType } from 'src/app/utils/colors';
import { PokemonDetails } from 'src/interfaces/pokemonDetails.interface';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  offset = 0;
  pokemon: Pokemon[] = [];
  currentPage = 1;
  maxPage = 10;
  pokemonDetails: PokemonDetails[] = [];
  backgroundColors: { [key: string]: string } = {};

  constructor(
    private navCtrl: NavController,
    private pokemonService: PokemonService,
    private modalController: ModalController,
    private favoritesPokemons: FavoritesPokemonsService,
    private popoverController: PopoverController
  ) {}

  ngOnInit(): void {
    this.loadPokemon();
    this.loadAllPokemonDetails();
  }

  loadAllPokemonDetails() {
    for (let i = 0; i <= this.maxPage; i++) {
      this.pokemonService.getPokemonDetails(i).subscribe(res => {
        this.pokemonDetails[i] = res;
        this.backgroundColors[res.pokeIndex] = this.getColorByPokemonType(res);
      });
    }
  }

  getColorByPokemonType(pokemon: PokemonDetails): string {
    if (!pokemon.types || pokemon.types.length === 0) 
      return '#FFFFFF';
  
    const type = pokemon.types[0].type.name as PokemonType;
    console.log(type);
    return colorsPokemons[type] || '#FFFFFF';
  }

  loadPokemon(){
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

  onSearchChange(event: CustomEvent){
    let value = event.detail.value;
  
    if(value == ''){
      this.offset = 0;
      this.pokemon = [];
      this.loadPokemon();
      return;
    }
  
    this.pokemonService.findPokemon(value).subscribe(res => {
      this.pokemon = [{
        ...res,
        pokeIndex: res.pokeIndex.toString()
      }];
    }, err => {
      this.pokemon = [];
    });
  }

  async openPokemonModal(pokemon: Pokemon){
    const modal = await this.modalController.create({
      component: PokemonModalPage,
      componentProps: {
        pokemon: pokemon
      }
    });

    return await modal.present();
  }

  onPageChange(page: number){
    this.currentPage = page;
    const offset = (page - 1) * 9;
    this.pokemonService.getPokemon(Number(offset)).subscribe(pokemons => {
      this.pokemon = pokemons.map(poke => {
        return {
          ...poke,
          pokeIndex: poke.pokeIndex.toString()
        };
      });
    });
  }

  toggleFavorite(pokemon: Pokemon) {
    if (this.isFavorite(pokemon)) {
      this.favoritesPokemons.removeFavorite(pokemon);
    } else {
      this.favoritesPokemons.addFavorite(pokemon);
    }
  }

  isFavorite(pokemon: Pokemon): boolean {
    const favorites = this.favoritesPokemons.getFavorites();
    return favorites.some(fav => fav.pokeIndex === pokemon.pokeIndex);
  }

  async presentPopover(event: any){
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: event,
      translucent: true
    });

    return await popover.present();
  }
}