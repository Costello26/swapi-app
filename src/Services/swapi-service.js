export default class Swapi {
    _apiBase = 'https://swapi.dev/api/';
    getResource = async (url) => {
        const res = await fetch(url);
        if(!res.ok){
            throw new Error(`Could not fetch - status ${res.status}`)
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
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    _transformPlanet(planet){
        return{
            id: +/\d+/.exec(planet.url),
            name: planet.name,
            type: 'planets',
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship(starship){
        return{
            id: +/\d+/.exec(starship.url),
            name: starship.name,
            type: 'starships',
            model: starship.model,
            manufacturer: starship.manufacturer,
            crew: starship.crew
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
}
