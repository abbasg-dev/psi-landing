import React from "react";
import { Form } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./phone-number-field.scss";

interface PhoneNumberFieldProps {
  fieldId?: string;
  value?: string;
  onChange: (val: any) => void;
  icon?: string;
}

const PhoneNumberField: React.FC<PhoneNumberFieldProps> = ({
  fieldId,
  value,
  onChange,
  icon,
}) => {
  return (
    <Form.Group controlId={fieldId} className="form-group">
      <div className="input-group">
        <PhoneInput
          international
          defaultCountry="AE"
          value={value || ""}
          onChange={(val: any) => onChange(val)}
          style={{ flexGrow: 1 }}
        />
        {icon && <img src={icon} alt="icon" />}
      </div>
    </Form.Group>
  );
};

export default PhoneNumberField;
