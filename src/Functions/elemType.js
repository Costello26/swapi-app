import Swapi from '../Services/swapi-service';

export const updateElem = (type, hook) => {
    const swapi = new Swapi()
    if(type === 'person'){
        swapi.getPerson(swapi.randomId(1,71))
        .then((person)=>{
            hook(person)
        })
    }
    if(type === 'planet'){
        swapi.getPlanet(swapi.randomId(1,40))
        .then((planet)=>{
            hook(planet)
        })
    }
    if(type === 'starship'){
        swapi.getStarship(swapi.randomId(2,10))
        .then((starship)=>{
            hook(starship)
        })
    }
} 