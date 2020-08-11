import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp'; 

// esta prueba sirve para los componentes verificar si esta devolviendo el resultado esperado
describe('Pruebas en <PrimeraApp />',()=>{
	// testing con la libreria de react jest
	// test('debe de mostrar Hola soy Goku',()=>{
	// 	const saludo = 'Hola soy Goku';
	// 	const { getByText } = render(<PrimeraApp saludo={ saludo } />);
	// 	expect(getByText(saludo)).toBeInTheDocument(); // este metodo se extrae de setupTest.js de una
	// 	// libreria de jest
	// });
	// testing con la libreria de enzyme
	// 
	
	test('debe de mostrar <PrimeraApp /> correctamente',()=>{
		const saludo = 'Hola soy Goku';
		const wraper = shallow(<PrimeraApp saludo={ saludo }/>);
		expect(wraper).toMatchSnapshot();
	});

	test('debe de mostrar el subtitulo enviado por props',()=>{
		const saludo    = 'Hola soy Goku';
		const subtitulo = 'Y le rompo la madre a Vegueta!!';
		const wraper    = shallow(
			<PrimeraApp 
				saludo    = { saludo }
				subtitulo = { subtitulo }
			/>
		);
		const textoParrafo = wraper.find('p').text();
		console.log(textoParrafo);
		// find funcion como el document.querySelector

		expect(textoParrafo).toBe(subtitulo);
	});
});