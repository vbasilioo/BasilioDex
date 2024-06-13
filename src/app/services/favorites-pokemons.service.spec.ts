import { TestBed } from '@angular/core/testing';

import { FavoritesPokemonsService } from './favorites-pokemons.service';

describe('FavoritesPokemonsService', () => {
  let service: FavoritesPokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesPokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
