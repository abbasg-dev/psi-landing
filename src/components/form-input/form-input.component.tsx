import React from "react";
import { Form } from "react-bootstrap";
import "./form-input.scss";

interface InputComponentProps {
  fieldId: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
}

const FormInput: React.FC<InputComponentProps> = ({
  fieldId,
  type,
  placeholder,
  value,
  onChange,
  icon,
}) => {
  return (
    <Form.Group controlId={fieldId} className="form-group my-4">
      <div className="input-group">
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-control custom-input"
        />
        {icon && <img src={icon} alt="icon" />}
      </div>
    </Form.Group>
  );
};

export default FormInput;
