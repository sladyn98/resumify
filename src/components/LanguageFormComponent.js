import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import _ from "lodash";

const LanguageFormComponent = ({ data, index, formData, setFormData }) => {
  const { language, fluency } = data;

  const updateLanguageData = (idx, fieldName, value) => {
    formData.languages[idx] = {
      ...formData.languages[idx],
      [fieldName]: value,
    };
    setFormData({
      ..._.set(formData, "languages", formData.languages),
    });
  };

  const handleRemoveLanguage = (idx) => {
    formData.languages = _.concat(
      _.slice(formData.languages, 0, idx),
      _.slice(formData.languages, idx + 1)
    );
    setFormData({
      ...formData,
      languages: formData.languages,
    });
  };

  return (
    <div className="my-3">
      <h4 className="mb-2 text-center">
        {data.language ? data.language : `Language ${index + 1}`}
      </h4>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="language"
          value={language}
          onChange={(e) =>
            updateLanguageData(index, "language", e.target.value)
          }
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fluency</Form.Label>
        <Form.Control
          as="select"
          name="fluency"
          value={fluency}
          onChange={(e) => updateLanguageData(index, "fluency", e.target.value)}
          required
        >
          <option>Fluent</option>
          <option>Native Speaker</option>
          <option>Beginner</option>
        </Form.Control>
      </Form.Group>
      <div className="text-center">
        <Button variant="danger" onClick={() => handleRemoveLanguage(index)}>
          Remove
        </Button>
      </div>
      <hr />
    </div>
  );
};

LanguageFormComponent.propTypes = {
  index: PropTypes.number,
  data: PropTypes.exact({
    language: PropTypes.string,
    fluency: PropTypes.string,
  }),
};

export default LanguageFormComponent;
