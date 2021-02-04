import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import _ from "lodash";

const EducationFormComponent = ({ index, data, formData, setFormData }) => {
  const {
    institution,
    area,
    studyType,
    startDate,
    endDate,
    gpa,
    courses,
  } = data;

  const updateEducationData = (idx, fieldName, value) => {
    formData.education[idx] = {
      ...formData.education[idx],
      [fieldName]: value,
    };
    setFormData({
      ..._.set(formData, "education", formData.education),
    });
  };

  const handleRemoveEducation = (idx) => {
    formData.education = _.concat(
      _.slice(formData.education, 0, idx),
      _.slice(formData.education, idx + 1)
    );
    setFormData({
      ...formData,
      education: formData.education,
    });
  };

  return (
    <div className="my-3">
      <h4 className="mb-2 text-center">
        {data.institution && data.studyType
          ? `${data.studyType} at ${data.institution}`
          : `Education ${index + 1}`}
      </h4>
      <Form.Group>
        <Form.Label>Institution</Form.Label>
        <Form.Control
          type="text"
          name="institution"
          value={institution}
          onChange={(e) =>
            updateEducationData(index, "institution", e.target.value)
          }
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Major Area</Form.Label>
        <Form.Control
          type="text"
          name="area"
          value={area}
          onChange={(e) => updateEducationData(index, "area", e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Degree Type</Form.Label>
        <Form.Control
          type="text"
          name="studyType"
          onChange={(e) =>
            updateEducationData(index, "studyType", e.target.value)
          }
          value={studyType}
        />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            onChange={(e) =>
              updateEducationData(index, "startDate", e.target.value)
            }
            value={startDate}
            required
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            onChange={(e) =>
              updateEducationData(index, "endDate", e.target.value)
            }
            value={endDate}
          />
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Label>GPA</Form.Label>
        <Form.Control
          type="number"
          name="gpa"
          onChange={(e) => updateEducationData(index, "gpa", e.target.value)}
          step="0.01"
          value={gpa}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Courses Taken(each on new line)</Form.Label>
        <Form.Control
          as="textarea"
          name="courses"
          onChange={(e) =>
            updateEducationData(index, "courses", e.target.value)
          }
          value={courses}
          required
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="danger" onClick={() => handleRemoveEducation(index)}>
          Remove
        </Button>
      </div>
      <hr />
    </div>
  );
};

EducationFormComponent.propTypes = {
  index: PropTypes.number,
  data: PropTypes.exact({
    institution: PropTypes.string,
    area: PropTypes.string,
    studyType: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    gpa: PropTypes.number,
    courses: PropTypes.string,
  }),
  formData: PropTypes.object,
  setFormData: PropTypes.func,
};

export default EducationFormComponent;
