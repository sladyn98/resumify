import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import _ from "lodash";

const AwardFormComponent = ({ data, index, formData, setFormData }) => {
  const { title, date, awarder, summary } = data;

  const updateAwardData = (idx, fieldName, value) => {
    formData.awards[idx] = {
      ...formData.awards[idx],
      [fieldName]: value,
    };
    setFormData({
      ..._.set(formData, "awards", formData.awards),
    });
  };

  const handleRemoveAward = (idx) => {
    formData.awards = _.concat(
      _.slice(formData.awards, 0, idx),
      _.slice(formData.awards, idx + 1)
    );
    setFormData({
      ...formData,
      awards: formData.awards,
    });
  };

  return (
    <div className="my-3">
      <h4 className="mb-2 text-center">
        {data.title ? data.title : `Award ${index + 1}`}
      </h4>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={(e) => updateAwardData(index, "title", e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={date}
          onChange={(e) => updateAwardData(index, "date", e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Awarder</Form.Label>
        <Form.Control
          type="text"
          name="awarder"
          value={awarder}
          onChange={(e) => updateAwardData(index, "awarder", e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Summary</Form.Label>
        <Form.Control
          as="textarea"
          name="summary"
          value={summary}
          onChange={(e) => updateAwardData(index, "summary", e.target.value)}
          required
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="danger" onClick={() => handleRemoveAward(index)}>
          Remove
        </Button>
      </div>
      <hr />
    </div>
  );
};

AwardFormComponent.propTypes = {
  index: PropTypes.number,
  data: PropTypes.exact({
    title: PropTypes.string,
    date: PropTypes.string,
    awarder: PropTypes.string,
    summary: PropTypes.string,
  }),
};

export default AwardFormComponent;
