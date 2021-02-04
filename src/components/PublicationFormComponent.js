import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import _ from "lodash";

const PublicationFormComponent = ({ data, index, formData, setFormData }) => {
  const { name, publisher, releaseDate, website, summary } = data;

  const updatePublicationData = (idx, fieldName, value) => {
    formData.publications[idx] = {
      ...formData.publications[idx],
      [fieldName]: value,
    };
    setFormData({
      ..._.set(formData, "publications", formData.publications),
    });
  };

  const handleRemovePublication = (idx) => {
    formData.publications = _.concat(
      _.slice(formData.publications, 0, idx),
      _.slice(formData.publications, idx + 1)
    );
    setFormData({
      ...formData,
      awards: formData.publications,
    });
  };

  return (
    <div className="my-3">
      <h4 className="mb-2 text-center">
        {data.name ? data.name : `Publication ${index + 1}`}
      </h4>
      <Form.Group>
        <Form.Label>Name of the Publication</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={(e) => updatePublicationData(index, "name", e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Name of the Publisher</Form.Label>
        <Form.Control
          type="text"
          name="publisher"
          value={publisher}
          onChange={(e) =>
            updatePublicationData(index, "publisher", e.target.value)
          }
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Publication Date</Form.Label>
        <Form.Control
          type="date"
          name="releaseDate"
          value={releaseDate}
          onChange={(e) =>
            updatePublicationData(index, "releaseDate", e.target.value)
          }
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Website</Form.Label>
        <Form.Control
          type="text"
          name="website"
          value={website}
          onChange={(e) =>
            updatePublicationData(index, "website", e.target.value)
          }
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Summary</Form.Label>
        <Form.Control
          as="textarea"
          name="summary"
          value={summary}
          onChange={(e) =>
            updatePublicationData(index, "summary", e.target.value)
          }
          required
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="danger" onClick={() => handleRemovePublication(index)}>
          Remove
        </Button>
      </div>
      <hr />
    </div>
  );
};

PublicationFormComponent.propTypes = {
  index: PropTypes.number,
  data: PropTypes.exact({
    name: PropTypes.string,
    publisher: PropTypes.string,
    releaseDate: PropTypes.string,
    website: PropTypes.string,
    summary: PropTypes.string,
  }),
};

export default PublicationFormComponent;
