// Ejercicio contraseña

// Mínimo 8 carácteres 20 máxim(testLlargada)

const testLlargada = pass => {
    if (pass.length < 8 || pass.length > 20) {
        return true;
    } else {
        console.log("La contraseña introducida tiene la longitud incorrecta");
    }
};

// Al menos tres letras minúsculas (testMinuscula)

const testMinuscula = pass => {
    minus = 0;
    for (i = 0; i < pass.length; i ++) {
        if (pass.charCodeAt(i) >= 97 || pass.charCodeAt(i) <= 122 && minus < 3) {
            minus ++;
        } else {
            console.log("La contraseña introducida es incorrecta")
        }
    }
};

// una letra mayúscula (testMayuscula)

const testMayuscula = pass => {
    mayus = 0;
    for (i = 0; i < pass.length; i ++) {
        if (pass.charCodeAt(i) >= 65 || pass.charCodeAt(i) <= 90 && mayus < 3) {
            mayus ++;
        }
    }

};

const testDigits = (pass) => {
    else {
        return false;
    } testMinuscula();
    testMayuscula();
    testDigits();
    testCaractersRepetits();

}

testContrasenya();
