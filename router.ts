import express from 'express';
import * as DigimonsController from './src/controllers/DigimonsController';
import * as PokemonController from './src/controllers/PokemonController';
export const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World with Typescript!')
})

router.get('/ts', (req, res) => {
    res.send('Typescript es lo máximo!')
})

router.get('/digimons', DigimonsController.getAll);
router.get('/digimons/:id', DigimonsController.get);
router.get('/digimons/name/:name', DigimonsController.getByName);
router.get('/digimons/type/:type', DigimonsController.getByType);
router.get('/pokemons', PokemonController.getAll);
router.get('/pokemons/:id', PokemonController.get);
router.get('/pokemons/name/:name', PokemonController.getName);
router.get('/pokemons/type/:type', PokemonController.getType);
router.get('/pokemons/strong-weak/:name', PokemonController.getStrongWeak);
router.get('/pokemons/addpokemon/:name', PokemonController.addPokemon);

router.post("/", (req, res) => {
    console.log("Cuerpo:", req.body);
    res.status(200).send(req.body);
});
