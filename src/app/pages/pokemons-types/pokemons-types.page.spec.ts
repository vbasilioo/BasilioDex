import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonsTypesPage } from './pokemons-types.page';

describe('PokemonsTypesPage', () => {
  let component: PokemonsTypesPage;
  let fixture: ComponentFixture<PokemonsTypesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsTypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
