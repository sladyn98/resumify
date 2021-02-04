import React from "react";
import { Form } from "react-bootstrap";

const themes = [
  "apage",
  "class",
  "classy",
  "elegant",
  "eloquent",
  "even",
  "flat",
  "kendall",
  "macchiato",
  "modern",
  "paper",
  "short",
  "spartan",
  "stackoverflow"
];

const ThemeFormComponent = ({ formData, setFormData }) => {
  const handleChangeTheme = (e) => {
    setFormData({
      ...formData,
      meta: {
        theme: e.target.value,
      },
    });
  };

  return (
    <div className="mt-4">
      <Form.Group>
        <Form.Label>Choose Theme</Form.Label>
        <Form.Control
          as="select"
          name="theme"
          value={formData.meta.theme}
          onChange={handleChangeTheme}
        >
          {themes.map((theme, idx) => (
            <option key={idx}>{theme}</option>
          ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default ThemeFormComponent;
