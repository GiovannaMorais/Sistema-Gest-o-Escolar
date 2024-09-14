const provasFields = [
  //  {
  //   name: "codigo",
  //   label: "ID",
  //   type: "number",
  //   className: "inputNumber",
  //   readOnly: true,
  //   divisorClass: "divisor1",
  // },
   {
    name: "data",
    label: "Data",
    type: "date",
    className: "inputData",
    required: true,
    divisorClass: "divisor3",
  },
  {
    name: "turma",
    label: "Turma",
    type: "select",
    options: ["1W", "1X", "1Y", "2W", "2X", "2Y", "3W", "3X", "3Y"],
    className: "inputSelect",
    required: true,
    divisorClass: "divisor1",
  },
  {
    label: "Disciplina",
    id: "disciplina",
    name: "disciplina",
    type: "select",
    className: "inputSelect",
    options: ["Matemática", "Português","Quimica", "Geografia",  "História",  "Física",  "Sociologia", "Ed.Fisica", "Inglês", "Filosofia", "Biologia"]
  },
  {
    label: "Matéria",
    id: "materia",
    name: "materia",
    type: "textarea",
    className: "inputTextArea",
    rows: 10,
    cols: 30,
  },
];

export default provasFields;
