import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Componentes funcionales  FC
const CounterApp = ({value}) => {
	const [ counter, setCounter ] = useState(value);

	const handleAdd = () =>{
		// de esta manera marca error por que no se puede cambiar el valor de una constante
		// conter = conuter + 1
		// de la siguiente manera se puede hacer la modificacion del counter
		// setCounter(counter + 1);
		// otra manera de hacerlo es: 
		setCounter( (c)=> c+1 );
	}

	const handleReset = ()=> setCounter( value );

	const handleSub = ()=> setCounter( counter - 1);

	return (
		<>
			<h1>CounterApp</h1>
			<h2>{ counter }</h2>
			<button onClick={ handleAdd }>+1</button>
			<button onClick={ handleReset }>Reset</button>
			<button onClick={ handleSub }>-1</button>
		</>
	);
}

CounterApp.propTypes = {
	value : PropTypes.number,
}

export default CounterApp;