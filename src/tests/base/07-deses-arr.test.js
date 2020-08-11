import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas de desestructuración',()=>{
	test('debe retornar un string y un número',()=>{
		const [letras, numeros] = retornaArreglo(); // ['ABC',123]
		// expect(arr).toEqual(['ABC',123]);
		console.log(typeof letras);
		expect(letras).toBe('ABC');
		expect(typeof letras).toBe('string');

		console.log(typeof numeros);
		expect(numeros).toBe(123);
		expect(typeof numeros).toBe('number');
	});
});