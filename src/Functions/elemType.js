import Swapi from '../Services/swapi-service';

export const updateElem = (type, hook, id) => {
    const swapi = new Swapi()
    if(type === 'person'){
        swapi.getPerson(swapi.randomId(1,71))
        .then((person)=>{
            hook({
                id: person.id,
                type: 'characters',
                name: person.name,
                fields: [
                    {label: 'Gender: ' , content: person.gender},
                    {label: 'Birth Year: ' , content: person.birthYear},
                    {label: 'Eye Color: ' , content: person.eyeColor},
            ]})
        })
    }
    if(type === 'planet'){
        swapi.getPlanet(swapi.randomId(1,40))
        .then((planet)=>{
            hook({
                id: planet.id,
                type: 'planets',
                name: planet.name,
                fields: [
                    {label: 'Population: ' , content: planet.population},
                    {label: 'Rotation Period: ' , content: planet.rotationPeriod + ' month'},
                    {label: 'Diameter: ' , content: planet.diameter + ' km'},
            ]})
        })
    }
    if(type === 'starship'){
        swapi.getStarship(swapi.randomId(2,10))
        .then((starship)=>{
            hook({
                id: starship.id,
                type: 'starships',
                name: starship.name,
                fields: [
                    {label: 'Model: ' , content: starship.model},
                    {label: 'Manufacturer: ' , content: starship.manufacturer},
                    {label: 'Crew: ' , content: starship.crew},
            ]})
        })
    }
} 