import React, { useState } from "react";
import { Form, Button, Card, Col, Alert } from "react-bootstrap";
import _ from "lodash";
import EducationFormComponent from "./EducationFormComponent"
import VolunteerFormComponent from "./VolunteerFormComponent";
import WorkFormComponent from "./WorkFormComponent";

const CreateResumeForm = () => {
  const initialFormData = {
    basics: {
      name: "",
      label: "",
      picture: "",
      email: "",
      phone: "",
      website: "",
      summary: "",
      location: {
        address: "",
        postalCode: "",
        city: "",
        countryCode: "",
        region: "",
      },
      profiles: [],
    },
    work: [],
    volunteer: [],
    education: [],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(``);

  const updateFormData = (objectPath, value) => {
    setFormData({
      ..._.set(formData, objectPath, value),
    });
  };

  const updateWorkData = (idx, fieldName, value) => {
    formData.work[idx] = {
      ...formData.work[idx],
      [fieldName]: value,
    };
    setFormData({
      ..._.set(formData, "work", formData.work),
    });
  };

  const handleAddWork = () => {
    formData.work = _.concat(formData.work, {
      company: "",
      position: "",
      website: "",
      startDate: "",
      endDate: "",
      summary: "",
      highlights: "",
    });
    setFormData({
      ...formData,
      work: formData.work,
    });
  };

  const handleRemoveWork = (idx) => {
    formData.work = _.concat(
      _.slice(formData.work, 0, idx),
      _.slice(formData.work, idx + 1)
    );
    setFormData({
      ...formData,
      work: formData.work,
    });
  };

  const updateVolunteeringData = (idx, fieldName, value) => {
    formData.volunteer[idx] = {
      ...formData.volunteer[idx],
      [fieldName]: value,
    };
    setFormData({
      ..._.set(formData, "volunteer", formData.volunteer),
    });
  };

  const handleAddVolunteering = () => {
    formData.volunteer = _.concat(formData.volunteer, {
      organization: "",
      position: "",
      website: "",
      startDate: "",
      endDate: "",
      summary: "",
      highlights: "",
    });
    setFormData({
      ...formData,
      volunteer: formData.volunteer,
    });
  };

  const handleRemoveVolunteering = (idx) => {
    formData.volunteer = _.concat(
      _.slice(formData.volunteer, 0, idx),
      _.slice(formData.volunteer, idx + 1)
    );
    setFormData({
      ...formData,
      volunteer: formData.volunteer,
    });
  };

  const handleAddEducation = () => {
    formData.education = _.concat(formData.education, {
      institution: "",
      area: "",
      studyType: "",
      startDate: "",
      endDate: "",
      gpa: 3,
      courses: "",
    });
    setFormData({
      ...formData,
      education: formData.education,
    });
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Create new resume</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <h3 className="mt-2">Basic Details</h3>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.basics.name}
                onChange={(e) => updateFormData("basics.name", e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={formData.basics.label}
                onChange={(e) => updateFormData("basics.label", e.target.value)}
                placeholder="e.g. Software Developer"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.basics.label}
                onChange={(e) => updateFormData("basics.email", e.target.value)}
                placeholder="e.g. johndoe@example.com"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.basics.phone}
                onChange={(e) => updateFormData("basics.phone", e.target.value)}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="Format: 123-456-789"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                name="summary"
                value={formData.basics.summary}
                onChange={(e) =>
                  updateFormData("basics.summary", e.target.value)
                }
                placeholder="Bio"
                required
              />
            </Form.Group>
            <h3 className="mt-2">Location Details</h3>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.basics.location.address}
                onChange={(e) =>
                  updateFormData("basics.location.address", e.target.value)
                }
                placeholder="e.g. 1234 Main St"
                required
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.basics.location.city}
                  onChange={(e) =>
                    updateFormData("basics.location.city", e.target.value)
                  }
                  required
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Country Code</Form.Label>
                <Form.Control
                  type="text"
                  name="countryCode"
                  value={formData.basics.location.countryCode}
                  onChange={(e) =>
                    updateFormData(
                      "basics.location.countryCode",
                      e.target.value
                    )
                  }
                  required
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  name="postalCode"
                  value={formData.basics.location.postalCode}
                  onChange={(e) =>
                    updateFormData("basics.location.postalCode", e.target.value)
                  }
                  required
                />
              </Form.Group>
            </Form.Row>
            <h3 className="mt-4">Work Details</h3>
            {formData.work.map((w, idx) => (
              <div key={idx}>
                <WorkFormComponent
                  index={idx}
                  data={w}
                  onChange={updateWorkData}
                  handleRemove={handleRemoveWork}
                />
              </div>
            ))}
            <Button variant="outline-primary" onClick={handleAddWork}>
              Add Work
            </Button>
            <h3 className="mt-4">Volunteering Details</h3>
            {formData.volunteer.map((v, idx) => (
              <div key={idx}>
                <VolunteerFormComponent
                  index={idx}
                  data={v}
                  onChange={updateVolunteeringData}
                  handleRemove={handleRemoveVolunteering}
                />
              </div>
            ))}
            <Button variant="outline-primary" onClick={handleAddVolunteering}>
              Add Volunteering
            </Button>
            <h3 className="mt-4">Education Details</h3>
            {formData.education.map((ed, idx) => (
              <div key={idx}>
                <EducationFormComponent
                  index={idx}
                  data={ed}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            ))}
            <Button variant="outline-primary" onClick={handleAddEducation}>
              Add Education
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default CreateResumeForm;
