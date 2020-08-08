// import React, {Fragment} from 'react';
// 
import React from 'react';
import PropTypes from 'prop-types';

// Componentes funcionales  FC
const PrimeraApp = ({saludo, subtitulo}) => {
	// const saludo = 'Hola Mundo!';
	// const saludo = {
	// 	nombre : 'Jonathan',
	// 	edad   : 29
	// };
	
	return (
		// Los fragments sirven para agregar componetes como objetos como div, sin agregar el div
		// La forma corta de agregarlos es solo abriendo y cerrando los signos de html
		<>
			<h1>{ saludo }</h1>
			{/* <pre>{ JSON.stringify(saludo, null, 2) }</pre> */}
			<p>{ subtitulo }</p>
		</>
	);
}

// Con esta propiedad puedes obligar a cualquiera que utilice este componente a que el }
// argumento que se pasa al componente sea obilgatorio
PrimeraApp.propTypes = {
	saludo : PropTypes.string.isRequired,
}
//  Otra forma de poner valores por defecto
PrimeraApp.defaultProps = {
	subtitulo : 'Soy un subtitulo'
}

export default PrimeraApp;