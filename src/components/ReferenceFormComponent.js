import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import _ from "lodash";

const ReferenceFormComponent = ({ data, index, formData, setFormData }) => {
  const { name, reference } = data;

  const updateReferenceData = (idx, fieldName, value) => {
    formData.references[idx] = {
      ...formData.references[idx],
      [fieldName]: value,
    };
    setFormData({
      ..._.set(formData, "references", formData.references),
    });
  };

  const handleRemoveReference = (idx) => {
    formData.references = _.concat(
      _.slice(formData.references, 0, idx),
      _.slice(formData.references, idx + 1)
    );
    setFormData({
      ...formData,
      references: formData.references,
    });
  };

  return (
    <div className="my-3">
      <h4 className="mb-2 text-center">
        {data.name ? data.name : `Reference ${index + 1}`}
      </h4>
      <Form.Group>
        <Form.Label>Name of the Referrer</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={(e) => updateReferenceData(index, "name", e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Reference</Form.Label>
        <Form.Control
          type="text"
          name="reference"
          value={reference}
          onChange={(e) =>
            updateReferenceData(index, "reference", e.target.value)
          }
          required
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="danger" onClick={() => handleRemoveReference(index)}>
          Remove
        </Button>
      </div>
      <hr />
    </div>
  );
};

ReferenceFormComponent.propTypes = {
  index: PropTypes.number,
  data: PropTypes.exact({
    name: PropTypes.string,
    reference: PropTypes.string,
  }),
};

export default ReferenceFormComponent;
