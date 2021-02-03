import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const WorkFormComponent = ({ onChange, handleRemove, index, data }) => {
  const {
    company,
    position,
    website,
    startDate,
    endDate,
    summary,
    highlights,
  } = data;

  return (
    <div className="my-3">
      <h4 className="mb-2 text-center">
        {data.company && data.position
          ? `${data.position} at ${data.company}`
          : `Work ${index + 1}`}
      </h4>
      <Form.Group>
        <Form.Label>Company</Form.Label>
        <Form.Control
          type="text"
          name="company"
          value={company}
          onChange={(e) => onChange(index, "company", e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Position</Form.Label>
        <Form.Control
          type="text"
          name="position"
          value={position}
          onChange={(e) => onChange(index, "position", e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Website</Form.Label>
        <Form.Control
          type="text"
          name="website"
          onChange={(e) => onChange(index, "website", e.target.value)}
          value={website}
        />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            onChange={(e) => onChange(index, "startDate", e.target.value)}
            value={startDate}
            required
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            onChange={(e) => onChange(index, "endDate", e.target.value)}
            value={endDate}
          />
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Label>Work Summay</Form.Label>
        <Form.Control
          type="text"
          name="workSummary"
          onChange={(e) => onChange(index, "summary", e.target.value)}
          value={summary}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Highlights</Form.Label>
        <Form.Control
          as="textarea"
          name="highlights"
          onChange={(e) => onChange(index, "highlights", e.target.value)}
          value={highlights}
          required
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="danger" onClick={() => handleRemove(index)}>
          Remove
        </Button>
      </div>
      <hr />
    </div>
  );
};

WorkFormComponent.propTypes = {
  index: PropTypes.number,
  data: PropTypes.exact({
    company: PropTypes.string,
    position: PropTypes.string,
    website: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.string,
  }),
  onChange: PropTypes.func,
  handleRemove: PropTypes.func,
};

export default WorkFormComponent;
