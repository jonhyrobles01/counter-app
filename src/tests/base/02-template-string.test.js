import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.test.js',()=>{
	test('getSaludo debe de retornar Hola ${nombre}',()=>{
		const nombre = 'Jonathan';
		const saludo = getSaludo(nombre);
		console.log(saludo);
		expect(saludo).toBe('Hola '+nombre);
	});

	test('getSaludo debe de retornar Hola Goku si no hay argumentos en el nombre',()=>{
		const saludo = getSaludo();
		console.log(saludo);
		expect(saludo).toBe('Hola Goku');
	});

	//  getSaludo debe de retornar Hola Jonathan si no hay argumento en el metodo
});