import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas en funciones de Heroes',()=>{
	test('debe de retornar un héroe por id',()=>{
		const id = 1;
		const heroe = getHeroeById(id);
		const heroeData = heroes.find(h=>h.id===id);
		expect(heroe).toEqual(heroeData);
	});

	test('debe de retornar un undefined si héroe no existe',()=>{
		const id = 10;
		const heroe = getHeroeById(id);
		expect(heroe).toBe(undefined);
	});

	test('debe de retornar listado de heroes de DC',()=>{
		const owner = 'DC';
		const heroe = getHeroesByOwner(owner);
		const heroeData = heroes.filter(h=>h.owner===owner);
		console.log(heroeData);
		expect(heroe).toEqual(heroeData);
	});

	test('debe de retornar un el numero de heroes de marvel se esperan 2',()=>{
		const owner = 'Marvel';
		const heroe = getHeroesByOwner(owner);
		console.log(heroe.length);
		expect(heroe.length).toBe(2);
	});
});