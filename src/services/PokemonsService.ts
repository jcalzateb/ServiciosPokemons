import { PokemonI } from "../interfaces/PokemonInterfaces";
const db = require('../db/Pokemons.json');

module PokemonsService{
    export function getAll(): Array<PokemonI> {
        const pokemons: Array<PokemonI> = db;
        return pokemons
    }
    export function get(id: number): PokemonI {
        const pokemons: Array<PokemonI> = db;
        const pokemon: Array<PokemonI> = pokemons.filter(e => e.id === id);
        if (pokemon.length < 1) {
            throw "No se encontró el pokemon"
        }
        return pokemon[0];
    }
    export function getName(name: string): Array<PokemonI>{
        const pokemons: Array<PokemonI> = db;
        const matches: Array<PokemonI> = pokemons.filter(function (e) {
            return e.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        })
        if (matches.length < 1) {
            throw "No se encontró el pokemon"
        }
        return matches;
    }

    export function getType(type: string): Array<PokemonI>{
        const pokemons: Array<PokemonI> = db;
        let matches: Array<PokemonI>= []
        pokemons.forEach(pokemon => {
            const found= pokemon.type.filter(e => e.name.toLowerCase() === type)
            if(found.length>0){
                matches.push(pokemon)
            }
        })

        if (matches.length < 1){
            throw "No se encontró el tipo"
        }
        return matches
    }

    export function getStrongWeak(name: string): Array<PokemonI> {
        const pokemons: Array<PokemonI> = db;
        let matchesStrong: Array<PokemonI> = [];
        let matchesWeak: Array<PokemonI> = [];
        let matches: Array<PokemonI> = [];
        let pokemon: Array<PokemonI> = pokemons.filter(function (e) {
            return e.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
        })
        if (pokemon.length < 1) {
            throw "No se encontró el pokemon"
        } else {
            pokemon = pokemon.filter(function (e) {
                const nombre = e.name;
                
                const estado = e.type.filter(elem => {
                    let tipo = elem.name;
                    
                    pokemons.forEach(pokemon => {
                        const sW = pokemon.type.filter(elemento => {

                            for (let i = 0; i < elemento.weakAgainst.length; i++) {
                                const tipo2 = elemento.weakAgainst[i];
                                
                                if (tipo2.toString() == tipo) {
                                    matches.push(pokemon); 
                                }
                            }

                            for (let j = 0; j < elemento.strongAgainst.length; j++) {
                                const tipo3 = elemento.strongAgainst[j];
                                if (tipo3.toString() == tipo) {
                                    matches.push(pokemon);      
                                }
                            }

                            
                        })
                    })

                })
            });
            return matches;
        }
    }

    export function addPokemon(name: string): Array<PokemonI>{
        let newPoke= name.split("-")
       
        console.log(newPoke)

        throw `<b>Nombre:</b> ${newPoke[0]}. <b>Tipo:</b> ${newPoke[1]}. <b>Numero:</b> ${newPoke[2]}. <b>Es fuerte contra:</b> ${newPoke[3]}. <b>Es debil contra:</b> ${newPoke[4]}.`

    }

}

export default PokemonsService;