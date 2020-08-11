import { getHeroeByIdAsync } from '../../base/09-promesas.js';
import heroes from '../../data/heroes';


describe('Pruebas con promesas',()=>{
	test('debe de retornar un Héroe async',(done)=>{
		const id = 1;
		getHeroeByIdAsync(id)
			.then(heroe => {
				expect(heroe).toBe(heroes[0]);
				// el done sirve para especificar al test que ya termnino, sirve muy bien para 
				// este tipo de pruebas async
				done();
			});
	});

	test('debe de obtener un error si el Héroe por id no existe',(done)=>{
		const id = 10;
		getHeroeByIdAsync(id)
			.catch(error => {
				expect(error).toBe("No se pudo encontrar el héroe");
				// el done sirve para especificar al test que ya termnino, sirve muy bien para 
				// este tipo de pruebas async
				done();
			});
	});
});