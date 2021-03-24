export default class Swapi {
    _apiBase = 'https://swapi.dev/api/';
    getResource = async (url) => {
        const res = await fetch(url);
        if(!res.ok){
            //throw new Error(`Could not fetch - status ${res.status}`)
            console.log(`Could not fetch - status ${res.status}`)
        }
        const body = await res.json()
        return body;
    };
    getAllPeople = async (path) => {
        let url = `${this._apiBase}people/`
        if(path){ url = path }
        const res = await this.getResource(url);
        return {
            count: res.count,
            previous: res.previous,
            next: res.next,
            results: res.results.map(this._transformPerson)
        };
    }
    getAllPlanets = async (path) => {
        let url = `${this._apiBase}planets/`
        if(path){ url = path }
        const res = await this.getResource(url);
        return {
            count: res.count,
            previous: res.previous,
            next: res.next, 
            results: res.results.map(this._transformPlanet)
        };
    }
    getAllStarships = async (path) => {
        let url = `${this._apiBase}starships/`
        if(path){ url = path }
        const res = await this.getResource(url);
        return {
            count: res.count,
            previous: res.previous,
            next: res.next,
            results: res.results.map(this._transformStarship)
        };
    }

    getPerson = async (id) => {
        const res = await this.getResource(`${this._apiBase}people/${id}/`);
        return this._transformPerson(res, id);
    }
    getPlanet = async (id) => {
        const res = await this.getResource(`${this._apiBase}planets/${id}/`);
        return this._transformPlanet(res, id);
    }
    getStarship = async (id) => {
        const res = await this.getResource(`${this._apiBase}starships/${id}/`);
        return this._transformStarship(res, id);
    }

    _transformPerson(person){
        return{
            id: +/\d+/.exec(person.url),
            name: person.name,
            type: 'characters',
            image: `https://starwars-visualguide.com/assets/img/characters/${+/\d+/.exec(person.url)}.jpg`,
            fields: [
                {label: 'Gender: ', content: person.gender},
                {label: 'Birth Year: ', content: person.birth_year},
                {label: 'Eye Color: ', content: person.eye_color}
            ],
            additionalFields: [
                {label: 'Skin Color: ', content: person.skin_color},
                {label: 'Hair Color: ', content: person.hair_color},
                {label: 'Height: ', content: person.height}
            ]
        }
    }

    _transformPlanet(planet){
        return{
            id: +/\d+/.exec(planet.url),
            name: planet.name,
            type: 'planets',
            image: `https://starwars-visualguide.com/assets/img/planets/${+/\d+/.exec(planet.url)}.jpg`,
            fields: [
                {label: 'Population: ', content: (parseInt(planet.population) * 10).toLocaleString('en-EN')},
                {label: 'Rotation period: ', content: planet.rotation_period + ' months'},
                {label: 'Diameter: ', content: (parseInt(planet.diameter) * 10).toLocaleString('en-EN') + ' km'}
            ],
            additionalFields: [
                {label: 'Climate: ', content: planet.climate },
                {label: 'Terrain: ', content: planet.terrain },
                {label: 'Orbital Period: ', content: planet.orbital_period }
            ]
        }
    }

    _transformStarship(starship){
        return{
            id: +/\d+/.exec(starship.url),
            name: starship.name,
            type: 'starships',
            image: `https://starwars-visualguide.com/assets/img/starships/${+/\d+/.exec(starship.url)}.jpg`,
            fields: [
                {label: 'Model: ', content: starship.model},
                {label: 'Manufacturer: ', content: starship.manufacturer},
                {label: 'Crew: ', content: starship.crew}
            ],
            additionalFields: [
                {label: 'Class: ', content: starship.starship_class },
                {label: 'Passengers: ', content: starship.passengers},
                {label: 'Length: ', content: starship.length},
            ]
        }
    }

    randomId(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.trunc(Math.random() * (max - min) + min);
    }

    randomPerson(){
        return this.randomId(1,71);
    }

    randomPlanet(){
        return this.randomId(1,40);
    }

    randomStarship(){
        return this.randomId(2,10);
    }

    async checkElem(type, id){
        const res =await fetch(`${this._apiBase}${type}/${id}`)
        if(!res.ok){
            return false
        }
        return true
    }

    // decimalPoint(num){
    //     return (parseInt(num) * 10).toLocaleString('en-EN');
    // }

    
}
