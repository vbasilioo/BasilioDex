import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.page.html',
  styleUrls: ['./pokemon-modal.page.scss'],
})
export class PokemonModalPage implements OnInit{

  pokemon: Pokemon | undefined;
  
  constructor(
    private navParams: NavParams,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemon = this.navParams.get('pokemon');
    if (this.pokemon?.pokeIndex !== undefined) {
      this.pokemonService.getPokemonDetails(Number(this.pokemon.pokeIndex)).subscribe(pokemon => {
      console.log('POKEMON: ', pokemon);
      });
    }
  }
  
}