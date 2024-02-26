export class Heros {
 id: number;
 name: string;
 idApi: number;
 slug: string | undefined;
 powerstats: PowerStats;
    constructor(id: number, name: string, idApi: number, slug: string,powerstats: PowerStats) {
        this.id = id;
        this.name = name;
        this.idApi = idApi;
        this.slug = slug;
        this.powerstats = powerstats;
    }
}
export interface PowerStats {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
}