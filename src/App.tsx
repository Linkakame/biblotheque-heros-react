import React, { useState, useEffect } from 'react';
import { Heros } from './Heros'; // Utilisation de "Heros" au lieu de "heros"
import SuperHerosData from './SuperHeros.json';

export const App = () => {
    const [heroes, setHeroes] = useState<Heros[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const heroesFromData = SuperHerosData.map((heroData: any) => new Heros(heroData.id,
            heroData.name, heroData['id-api'], heroData.slug, heroData.powerstats));
        setHeroes(heroesFromData);
    }, []); 

    const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

    const handleMouseEnter = (id: number) => {
        setHoveredCardId(id);
    };

    const handleMouseLeave = () => {
        setHoveredCardId(null);
    };

    const filteredHeroes = heroes.filter(hero =>
        hero.id.toString().includes(searchTerm) || hero.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
            <h1>Super Heroes App</h1>
            <input
                type="text"
                placeholder="Search by ID or Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p>Nombre de super-héros chargés: {filteredHeroes.length}</p>
            <div className="container">
                <div className="row">
                    {filteredHeroes.map((hero: Heros) => (
                        <div key={hero.id} className="col-md-4">
                            <div className="card mb-3 d-flex flex-row align-items-center"
                                style={{ backgroundColor: '#ffffff', borderColor: hoveredCardId === hero.id ? 'blue' : '', transition: 'border-color 0.3s' }}
                                onMouseEnter={() => handleMouseEnter(hero.id)}
                                onMouseLeave={handleMouseLeave}
                            > {/* Background blanc pour la carte */}
                                <img src={`https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/images/sm/${hero.slug}.jpg`}
                                    alt={hero.name} className="card-img-left" />
                                <div className="card-body">
                                    <h5 className="card-title">{hero.name}</h5>
                                    <p className="card-text">Id: {hero.id}</p>
                                    <p className="card-text">Id API: {hero.idApi}</p>
                                    <p className="card-text">Slug: {hero.slug}</p>
                                    <p className="card-text">Intelligence : <span style={{ color: 'black', backgroundColor: 'green', padding: '2px' }}>{hero.powerstats.intelligence}</span></p>
                                    <p className="card-text">Force : <span style={{ color: 'black', backgroundColor: 'red', padding: '2px' }}>{hero.powerstats.strength}</span></p>
                                    <p className="card-text">Vitesse : <span style={{ color: 'black', backgroundColor: 'orange', padding: '2px' }}>{hero.powerstats.speed}</span></p>
                                    <p className="card-text">Endurance : <span style={{ color: 'black', backgroundColor: 'blue', padding: '2px' }}>{hero.powerstats.durability}</span></p>
                                    <p className="card-text">Pouvoir : <span style={{ color: 'white', backgroundColor: 'black', padding: '2px' }}>{hero.powerstats.power}</span></p> {/* Fond de couleur gris clair */}
                                    <p className="card-text">Combat : <span style={{ color: 'black', backgroundColor: '#f5f5f5', padding: '2px'}}>{hero.powerstats.combat}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
