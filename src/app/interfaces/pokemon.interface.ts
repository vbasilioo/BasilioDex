export type PokemonType = 'fire' | 'grass' | 'electric' | 'water' | 'ground' | 'rock' | 'fairy' | 'poison' | 'bug' | 'dragon' | 'psychic' | 'flying' | 'fighting' | 'normal';

export interface Pokemon {
    id: number;
    pokeIndex: string;
    name: string;
    image: string;
    url: string;
    color?: string;
    type: string;
}