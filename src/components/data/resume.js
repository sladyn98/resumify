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
  awards: [],
  skills: [],
  languages: [],
  publications: [],
  references: [],
  meta: {
    theme: "eloquent",
  },
};

export default initialFormData;