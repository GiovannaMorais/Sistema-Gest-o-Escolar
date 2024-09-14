import React, { useState, useEffect } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
} from "./styles";

export default function Form({ formFields, onSubmit, onClose, initialValues }) {
  const [formData, setFormData] = useState(initialValues || {});

  useEffect(() => {
    console.log(initialValues);
    setFormData(initialValues || {});
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClearForm = () => {
    setFormData({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>Formulário</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit} className="dados">
            {formFields.map((field) => (
              <div key={field.name} className={`${field.divisorClass} divs`}>
                {field.section && <p className="titulo">{field.section }</p>}
                <p className="subtituloForm">{field.label}</p>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={field.className}
                    required={field.required}
                  >
                    <option>Escolha</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={field.className}
                    placeholder={field.placeholder}
                    required={field.required}
                    readOnly={field.readOnly}
                  />
                )}
              </div>
            ))}
            <ModalFooter className="divBotao">
              <button className="btnLimpar" type="reset" onClick={handleClearForm}>Limpar</button>
              <button className="btnSalvar" type="submit">Salvar</button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}
