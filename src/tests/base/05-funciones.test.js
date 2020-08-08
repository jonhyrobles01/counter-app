import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Prueba en 05-funciones',()=>{
	test('getUser debe retornar un objeto',()=>{
		const userTest = {
			uid      : 'ABC123',
			username : 'El_Papi1502'
		}
		const user = getUser();
		console.log(user);
		expect(user).toEqual(userTest);
	});

	//  getUsuarioActivo
	//  
	test('getUsuarioActivo debe retornar un objeto',()=>{	
		const nombre = 'Jonathan';
		const userTest = {
			uid      : 'ABC567',
			username : nombre
		}
		const user = getUsuarioActivo(nombre);
		console.log(user);
		expect(user).toEqual(userTest);
	});
});