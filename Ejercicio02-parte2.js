//Ejercicio contraseña

//Mínimo 8 carácteres 20 máxim(testLlargada)

const testLlargada = pass => {
  pass = 'ALex2021';
  console.log(pass);
  if (pass.length < 8 || pass.length > 20) {
    //pass === false;
    console.log('hola');
  } else {
    //pass === true;
    console.log('adios');
  }

  let mensaje =
    pass === true
      ? 'Has introducido correctamente la clave'
      : 'Has introducido mal la clave';

  return mensaje;
};

//Al menos tres letras minúsculas (testMinuscula)

const testMinuscula = pass => {
  pass = 'hola2';
};

//una letra mayúscula (testMayuscula)

const testMayuscula = pass => {
  pass = 'hola3';
};

//con dos digitos. (testDigits)

const testDigits = pass => {
  pass = 'hola4';
};

//No ha de tener caracteres repetidos seguidos aaa es debil pero aa y a son fuertes(testCaractersRepetits)

const testCaractersRepetits = pass => {
  pass = 'hola5';
  return pass;
};

//Comprobación de contraseña, coger todas las funciones y llamarlas aquí (testContrasenya)

function testContrasenya(pass) {
  testLlargada(pass);
  testMinuscula(pass);
  testMayuscula(pass);
  testDigits(pass);
  testCaractersRepetits(pass);
}

testContrasenya();
