import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp'; 

// esta prueba sirve para los componentes verificar si esta devolviendo el resultado esperado
describe('Pruebas en <CounterApp />',()=>{
	let wraper = shallow(<CounterApp />);

	// el metodo de beforeEch se ejecuta por cada test, en este caso nos sirve para inicializar
	// por defecto el wraper
	beforeEach(()=>{
		wraper = shallow(<CounterApp />);
	});
	
	test('debe de mostrar <CounterApp /> correctamente',()=>{
		expect(wraper).toMatchSnapshot();
	});

	test('debe de mostrar el value enviado por props',()=>{
		const counter = 100;
		const wraper  = shallow(
			<CounterApp 
				value    = { counter }
			/>
		);
		const textoCounter = wraper.find('h2').text().trim();
		console.log(textoCounter);
		// find funcion como el document.querySelector

		expect(textoCounter).toBe('100');
	});


	test('debe de incrementar el contador con el boton +1',()=>{
		wraper.find('button').at(0).simulate('click');
		const textoCounter = wraper.find('h2').text().trim();
		console.log(textoCounter);
		expect(textoCounter).toBe('11');
	});

	test('debe de decrementar el contador con el boton -1',()=>{
		wraper.find('button').at(2).simulate('click');
		const textoCounter = wraper.find('h2').text().trim();
		console.log(textoCounter);
		expect(textoCounter).toBe('9');
	});

	test('debe de colocar el valor por defecto con el boton de Reset',()=>{
		const wraper  = shallow(
			<CounterApp 
				value    = { 105 }
			/>
		);
		wraper.find('button').at(0).simulate('click');
		wraper.find('button').at(0).simulate('click');
		wraper.find('button').at(1).simulate('click');
		const textoCounter = wraper.find('h2').text().trim();
		console.log(textoCounter);

		expect(textoCounter).toBe('105');
	});
});