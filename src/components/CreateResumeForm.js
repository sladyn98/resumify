import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";
import { Form, Button, Card, Col, Alert } from "react-bootstrap";
import _, { create } from "lodash";
import initialFormData from "./data/resume";
import AwardFormComponent from "./AwardFormComponent";
import EducationFormComponent from "./EducationFormComponent";
import LanguageFormComponent from "./LanguageFormComponent";
import PublicationFormComponent from "./PublicationFormComponent";
import ReferenceFormComponent from "./ReferenceFormComponent";
import SkillFormComponent from "./SkillFormComponent";
import ThemeFormComponent from "./ThemeFormComponent";
import VolunteerFormComponent from "./VolunteerFormComponent";
import WorkFormComponent from "./WorkFormComponent";

import { listResumes } from "../graphql/queries";
import { createResume, updateResume } from "../graphql/mutation";

const CreateResumeForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [meta, setMeta] = useState({});
  const [error, setError] = useState(``);

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    // Get username of the current authenticated user
    const { username } = await Auth.currentAuthenticatedUser();

    // Fetch existing resume data for current authenticated user
    const resumeData = await API.graphql(graphqlOperation(listResumes), {
      filter: { username },
      limit: 1,
    });

    // If it exists, use that data for initial form else use the default initial value
    if (resumeData.data.listResumes.items.length) {
      const {
        id,
        createdAt,
        updatedAt,
        owner,
        ...rest
      } = resumeData.data.listResumes.items[0];
      setFormData(rest);
      // Set the metadata
      setMeta({
        id,
        createdAt,
        updatedAt,
        owner,
      });
    }
  };

  /**
   *
   * @param {String} objectPath Path to the nested object key
   * @param {String} value New Value
   */
  const updateFormData = (objectPath, value) => {
    setFormData({
      ..._.set(formData, objectPath, value),
    });
  };

  /**
   *
   * @param {Number} idx Index # of the work
   * @param {String} fieldName Name of the field
   * @param {String} value New value for the field
   */
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

  /**
   *
   * @param {Number} idx Index #
   * @param {String} fieldName Name of the field
   * @param {String} value New value for the field
   */
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

  const handleAddAward = () => {
    formData.awards = _.concat(formData.awards, {
      title: "",
      date: "",
      awarder: "",
      summary: "",
    });
    setFormData({
      ...formData,
      awards: formData.awards,
    });
  };

  const handleAddSkill = () => {
    formData.skills = _.concat(formData.skills, {
      name: "",
      level: "",
      keywords: "",
    });
    setFormData({
      ...formData,
      skills: formData.skills,
    });
  };

  const handleAddLanguage = () => {
    formData.languages = _.concat(formData.languages, {
      language: "",
      fluency: "",
    });
    setFormData({
      ...formData,
      languages: formData.languages,
    });
  };

  const handleAddPublication = () => {
    formData.publications = _.concat(formData.publications, {
      name: "",
      publisher: "",
      website: "",
      releaseDate: "",
      summary: "",
    });
    setFormData({
      ...formData,
      publications: formData.publications,
    });
  };

  const handleAddReference = () => {
    formData.references = _.concat(formData.references, {
      name: "",
      reference: "",
    });
    setFormData({
      ...formData,
      references: formData.references,
    });
  };

  const handleGenerateResume = () => {
    // TODO Call rest api to fetch resume pdf
    console.log(JSON.stringify(formData));
  };

  const handleSaveResume = async () => {
    // If resume is previously generated,
    // just update it
    if (setMeta?.id) {
      await API.graphql(
        graphqlOperation(updateResume, {
          input: formData,
          condition: {
            id: setMeta.id,
          },
        })
      );
    } else {
      // Else create a new resume for the current user
      await API.graphql(
        graphqlOperation(createResume, {
          input: formData,
        })
      );
    }
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
                value={formData.basics.email}
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
            <h3 className="mt-4">Awards Earned</h3>
            {formData.awards.map((aw, idx) => (
              <div key={idx}>
                <AwardFormComponent
                  index={idx}
                  data={aw}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            ))}
            <Button variant="outline-primary" onClick={handleAddAward}>
              Add Award
            </Button>
            <h3 className="mt-4">Publications</h3>
            {formData.publications.map((pb, idx) => (
              <div key={idx}>
                <PublicationFormComponent
                  index={idx}
                  data={pb}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            ))}
            <Button variant="outline-primary" onClick={handleAddPublication}>
              Add Publication
            </Button>
            <h3 className="mt-4">Skills</h3>
            {formData.skills.map((sk, idx) => (
              <div key={idx}>
                <SkillFormComponent
                  index={idx}
                  data={sk}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            ))}
            <Button variant="outline-primary" onClick={handleAddSkill}>
              Add Skill
            </Button>
            <h3 className="mt-4">Languages</h3>
            {formData.languages.map((sk, idx) => (
              <div key={idx}>
                <LanguageFormComponent
                  index={idx}
                  data={sk}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            ))}
            <Button variant="outline-primary" onClick={handleAddLanguage}>
              Add Language
            </Button>
            <h3 className="mt-4">References</h3>
            {formData.references.map((rf, idx) => (
              <div key={idx}>
                <ReferenceFormComponent
                  index={idx}
                  data={rf}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            ))}
            <Button variant="outline-primary" onClick={handleAddReference}>
              Add Reference
            </Button>
            <ThemeFormComponent formData={formData} setFormData={setFormData} />
            <div className="text-center">
              <Button variant="info" onClick={handleSaveResume}>
                Save
              </Button>
              {` `}
              <Button variant="dark" onClick={handleGenerateResume}>
                Generate
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default withAuthenticator(CreateResumeForm);
