import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PokemonModalPage } from './pokemon-modal.page';
import { PokemonService } from 'src/app/services/pokemon.service';
import { NavParams } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('PokemonModalPage', () => {
  let component: PokemonModalPage;
  let fixture: ComponentFixture<PokemonModalPage>;
  let pokemonService: PokemonService;
  let navParams: NavParams;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonModalPage ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { 
          provide: PokemonService, 
          useValue: jasmine.createSpyObj('PokemonService', { getPokemonDetails: of({}) })
        },
        { provide: NavParams, useValue: { get: () => ({ pokeIndex: 1 }) } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonModalPage);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(PokemonService);
    navParams = TestBed.inject(NavParams);
    fixture.detectChanges();
  });

  it('[TESTE] Criação de Pokemon na Pokemon Modal', () => {
    expect(component).toBeTruthy();
  });
});