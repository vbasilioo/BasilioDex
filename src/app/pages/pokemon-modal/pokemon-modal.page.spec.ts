import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonModalPage } from './pokemon-modal.page';

describe('PokemonModalPage', () => {
  let component: PokemonModalPage;
  let fixture: ComponentFixture<PokemonModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
