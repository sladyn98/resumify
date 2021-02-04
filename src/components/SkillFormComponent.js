import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import _ from "lodash";

const SkillFormComponent = ({ data, index, formData, setFormData }) => {
  const { name, level, keywords } = data;

  const updateSkillData = (idx, fieldName, value) => {
    formData.skills[idx] = {
      ...formData.skills[idx],
      [fieldName]: value,
    };
    setFormData({
      ..._.set(formData, "skills", formData.skills),
    });
  };

  const handleRemoveSkill = (idx) => {
    formData.skills = _.concat(
      _.slice(formData.skills, 0, idx),
      _.slice(formData.skills, idx + 1)
    );
    setFormData({
      ...formData,
      skills: formData.skills,
    });
  };

  return (
    <div className="my-3">
      <h4 className="mb-2 text-center">
        {data.name ? data.name : `Skill ${index + 1}`}
      </h4>
      <Form.Group>
        <Form.Label>Skill Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={(e) => updateSkillData(index, "name", e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Skill Level</Form.Label>
        <Form.Control
          as="select"
          name="level"
          value={level}
          onChange={(e) => updateSkillData(index, "level", e.target.value)}
          required
        >
          <option>Master</option>
          <option>Intermediate</option>
          <option>Beginner</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Keywords(each on new line)</Form.Label>
        <Form.Control
          as="textarea"
          name="keywords"
          value={keywords}
          onChange={(e) => updateSkillData(index, "keywords", e.target.value)}
          required
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="danger" onClick={() => handleRemoveSkill(index)}>
          Remove
        </Button>
      </div>
      <hr />
    </div>
  );
};

SkillFormComponent.propTypes = {
  index: PropTypes.number,
  data: PropTypes.exact({
    name: PropTypes.string,
    level: PropTypes.string,
    keywords: PropTypes.string,
  }),
};

export default SkillFormComponent;
