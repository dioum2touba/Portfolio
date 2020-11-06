import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import './Informations.css';

const Contact = (props) => {
  return (
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text >
             {props.Label}
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          aria-readonly="true"
          disabled="True"
          value={props.Value}
        />
      </InputGroup>
  );
};

export default Contact;
