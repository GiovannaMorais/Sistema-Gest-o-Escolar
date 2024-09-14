const recadoFields = [
  // {
  //   label: "ID",
  //   type: "number",
  //   id: "codigo",
  //   className: "inputNumber",
  //   readOnly: true,
  //   placeholder: ""
  // },
  {
    label: "Título",
    type: "text",
    id: "titulo",
    name: "titulo",
    className: "inputText",
    placeholder: "Dê um título",
    required: true
  },
  {
    label: "Recado",
    type: "textarea",
    id: "recado",
    name: "recado",
    className: "inputTextArea",
    cols: 28,
    rows: 6,
    placeholder: "Digite o recado",
    required: true
  },
  {
    label: "Data",
    type: "date",
    id: "data",
    name: "data",
    className: "inputData",
    required: true
  },
  {
    label: "Horário",
    type: "time",
    id: "horario",
    name: "horario",
    className: "inputData",
    required: true
  }
];

export default recadoFields;
