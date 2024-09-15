export const formattedTipoMaterial = (formData) => {
  if (formData === "Lista de Exercícios") {
    return formData
    .split(' ')
    .filter(palavra => palavra.toUpperCase() !== 'DE')
    .join('_').normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();;
  }
  return formData.normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toUpperCase();
}

const capitalizarPalavra = (palavra) => {
  return palavra.charAt(0).toUpperCase() + palavra.slice(1);
};

const tratarCasosEspeciais = (formData) => {
  const casosEspeciais = {
    'PDF': 'PDF',
    'VIDEOAULA': 'VideoAula',
    'QUESTIONARIO': 'Questionário'
  };
  return casosEspeciais[formData] || null;
};

export const desformatarTipoMaterial = (formData) => {
  const casoEspecial = tratarCasosEspeciais(formData);
  if (casoEspecial) {
    return casoEspecial;
  }

  const palavras = formData.toLowerCase().split('_');
  const palavrasFormatadas = palavras.map((palavra, index) => {
    if (index > 0 && palavra === 'exercicios') {
      return 'de Exercícios';
    }
    return capitalizarPalavra(palavra);
  });

  return palavrasFormatadas.join(' ');
};
