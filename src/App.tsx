import React, { useState, useEffect } from 'react';
import { Heros } from './Heros'; // Utilisation de "Heros" au lieu de "heros"
import SuperHerosData from './SuperHeros.json';

export const App = () => {
    const [heroes, setHeroes] = useState<Heros[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const heroesFromData = SuperHerosData.map((heroData: any) => new Heros(heroData.id,
            heroData.name, heroData['id-api'], heroData.slug));
        setHeroes(heroesFromData);
    }, []); 

    const filteredHeroes = heroes.filter(hero =>
        hero.id.toString().includes(searchTerm) || hero.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Super Heroes App</h1>
            <input
                type="text"
                placeholder="Search by ID or Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p>Nombre de super-héros chargés: {filteredHeroes.length}</p>
            {filteredHeroes.map((hero: Heros) => (
                <div key={hero.id}>
                    <h2>{hero.name}</h2>
                    <p>Id: {hero.id}</p>
                    <p>Id API: {hero.idApi}</p>
                    <p>Slug: {hero.slug}</p>
                    {
                        <img src={`https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/images/sm/${hero.slug}.jpg`} alt={hero.name} />
                    }
                </div>
            ))}
        </div>
    );
}

export default App;
