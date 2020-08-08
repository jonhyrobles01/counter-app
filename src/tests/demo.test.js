describe('Pruebas en el archivo demo.test.js',()=>{
	test('deben de ser iguales los string',()=>{
		// 1.- Inicialización
		const mensaje = 'Hola Mundo!';
		// 2.- Estimulo
		const mensaje2 = `Hola Mundo!`;
		// 3.- Observar el Comportamiento
		expect(mensaje).toBe(mensaje2);
	});
});

// en el primer parametro comentamos el valor esperado o algo referente
