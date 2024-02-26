export class Heros {
 id: number;
 name: string;
 idApi: number;
 slug: string | undefined;
    constructor(id: number, name: string, idApi: number, slug?: string) {
        this.id = id;
        this.name = name;
        this.idApi = idApi;
        this.slug = slug;
    }
}