import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PokemonModalPage } from '../pokemon-modal/pokemon-modal.page';
import { Pokemon } from 'src/interfaces/pokemon.interface';

interface PokemonResult {
  pokeIndex: number;
  // Add other properties here if needed
}

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

  constructor(
    private pokemonService: PokemonService,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(){
    this.pokemonService.getPokemon(this.offset).subscribe(res => {
      this.pokemon = [
        ...this.pokemon,
        ...res.map(poke => {
          return {
            ...poke,
            pokeIndex: poke.pokeIndex.toString()
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
    const offset = (page - 1) * 12;
    this.pokemonService.getPokemon(Number(offset)).subscribe(pokemons => {
      this.pokemon = pokemons.map(poke => {
        return {
          ...poke,
          pokeIndex: poke.pokeIndex.toString()
        };
      });
    });
  }
}
