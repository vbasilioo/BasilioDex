export interface PokemonDetails {
    abilities?: Ability[];
    base_experience?: number;
    forms?: [];
    game_indices?: [];
    height?: number;
    weight?: number;
    held_items?: any[];
    id?: number;
    is_default?: boolean;
    location_area_encounters?: string;
    stats?: Stats[];
    types?: Types[];
    color?: string;
}

interface Ability {
    ability: {
        name: string;
        url: string;
    };
}

interface Types {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

interface Stats {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}