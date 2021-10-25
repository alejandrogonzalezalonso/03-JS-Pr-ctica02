palabra = 'otorrinolaringologo';

const esVocal = palabra => {
  let vocales = '';
  let consonantes = '';
  let separarVocales = palabra.toLowerCase();
  separarVocales = separarVocales.split('');

  for (var i = 0; i < separarVocales.length; i++) {
    if (
      separarVocales[i] === 'a' ||
      separarVocales[i] === 'e' ||
      separarVocales[i] === 'i' ||
      separarVocales[i] === 'o' ||
      separarVocales[i] === 'u'
    ) {
      vocales += separarVocales[i];
    } else {
      consonantes += separarVocales[i];
    }
  }
  let vocalConsonante = `${vocales}${consonantes}`;
  return vocalConsonante;
  console.log(`La palabra ordenada por vocales sería ${vocalConsonante}`);
};

const separarVocalsDeConsonants = palabra => {
  let vocalConsonante = esVocal(palabra);
  let vocales = vocalConsonante.split('')[0];
  let consonantes = vocalConsonante.slice(vocales.length);
  console.log(`La palabra sería ${vocalConsonante}`);
};
esVocal(palabra);
separarVocalsDeConsonants(palabra);
