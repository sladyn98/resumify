/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResume = /* GraphQL */ `
  mutation CreateResume(
    $input: CreateResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    createResume(input: $input, condition: $condition) {
      id
      basics {
        name
        label
        email
        phone
        website
        summary
        location {
          address
          city
          region
          postalCode
          countryCode
        }
      }
      work {
        company
        position
        website
        startDate
        endDate
        summary
        highlights
      }
      education {
        institution
        area
        studyType
        startDate
        endDate
        gpa
        courses
      }
      volunteer {
        organization
        position
        website
        startDate
        endDate
        summary
        highlights
      }
      languages {
        language
        fluency
      }
      skills {
        name
        level
        keywords
      }
      awards {
        title
        date
        awarder
        summary
      }
      publications {
        name
        publisher
        website
        releaseDate
        summary
      }
      references {
        name
        reference
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateResume = /* GraphQL */ `
  mutation UpdateResume(
    $input: UpdateResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    updateResume(input: $input, condition: $condition) {
      id
      basics {
        name
        label
        email
        phone
        website
        summary
        location {
          address
          city
          region
          postalCode
          countryCode
        }
      }
      work {
        company
        position
        website
        startDate
        endDate
        summary
        highlights
      }
      education {
        institution
        area
        studyType
        startDate
        endDate
        gpa
        courses
      }
      volunteer {
        organization
        position
        website
        startDate
        endDate
        summary
        highlights
      }
      languages {
        language
        fluency
      }
      skills {
        name
        level
        keywords
      }
      awards {
        title
        date
        awarder
        summary
      }
      publications {
        name
        publisher
        website
        releaseDate
        summary
      }
      references {
        name
        reference
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteResume = /* GraphQL */ `
  mutation DeleteResume(
    $input: DeleteResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    deleteResume(input: $input, condition: $condition) {
      id
      basics {
        name
        label
        email
        phone
        website
        summary
        location {
          address
          city
          region
          postalCode
          countryCode
        }
      }
      work {
        company
        position
        website
        startDate
        endDate
        summary
        highlights
      }
      education {
        institution
        area
        studyType
        startDate
        endDate
        gpa
        courses
      }
      volunteer {
        organization
        position
        website
        startDate
        endDate
        summary
        highlights
      }
      languages {
        language
        fluency
      }
      skills {
        name
        level
        keywords
      }
      awards {
        title
        date
        awarder
        summary
      }
      publications {
        name
        publisher
        website
        releaseDate
        summary
      }
      references {
        name
        reference
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
