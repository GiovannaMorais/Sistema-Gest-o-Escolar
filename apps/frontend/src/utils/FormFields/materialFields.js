const materialFields = [
  // {
  //   name: "codigoMaterial",
  //   label: "Código do Material",
  //   type: "number",
  //   className: "inputNumber",
  //   readOnly: true,
  //   divisorClass: "divisor1",
  // },
  {
    name: "nomeMaterial",
    label: "Título do Material",
    type: "text",
    className: "inputText",
    placeholder: "Nome do material",
    required: true,
    divisorClass: "divisor2",
  },
  {
    name: "tipoMaterial",
    label: "Tipo do Material",
    type: "select",
    options: ["Questionário", "Lista de Exercícios", "VideoAula", "PDF", "Outro"],
    className: "inputSelect",
    required: true,
    divisorClass: "divisor3",
  },

  {
    name: "descricaoMaterial",
    label: "Descrição / Conteúdo do Material",
    type: "textarea",
    className: "inputTextArea",
    placeholder: "Descrição do material",
    required: false,
    divisorClass: "divisor3",
  },
    {
    name: "link",
    label: "Link do Material",
    type: "text",
    className: "inputText",
    placeholder: "Link do Material",
    // required: true,
    divisorClass: "divisor2",
  },

];

export default materialFields;
