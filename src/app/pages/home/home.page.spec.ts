import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from 'src/app/services/pokemons/pokemon.service';
import { of, throwError } from 'rxjs'; 

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let httpMock: HttpTestingController;
  let service: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: PokemonService,
          useValue: jasmine.createSpyObj('PokemonService', { 
            getPokemon: of({}),
            getPokemonDetails: of({}) 
          })
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('[TESTE] Criação de Pokemon na Home Page', () => {
    expect(component).toBeTruthy();
  });

  it('[TESTE] Deve chamar o método getPokemon do serviço PokemonService', () => {
    const pokemonService = TestBed.inject(PokemonService);
    component.ngOnInit();
    expect(pokemonService.getPokemon).toHaveBeenCalled();
  });

  it('[TESTE] Deve atualizar a lista de pokemons quando o método getPokemon é chamado', async () => {
    const pokemonService = TestBed.inject(PokemonService);
    (pokemonService.getPokemon as jasmine.Spy).and.returnValue(of([
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/'
      },
      {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/'
      },
    ]));
  });

  it('should call getPokemon with correct URL', () => {
    service.getPokemon(0).subscribe();

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon?offset=0&limit=9');
    expect(req.request.method).toBe('GET');
  });

  it('should call findPokemon with correct URL', () => {
    service.findPokemon('bulbasaur').subscribe();

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/1/');
    expect(req.request.method).toBe('GET');
  });
});